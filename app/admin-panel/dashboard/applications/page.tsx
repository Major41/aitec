"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Eye, X } from "lucide-react";
import { toast } from "sonner";

interface Application {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  highestEducation: string;
  university: string;
  program: string;
  school: string;
  schoolName?: string;
  programName?: string;
  status: "pending" | "approved" | "rejected";
  createdAt: string;
}

export default function ApplicationsPage() {
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const response = await fetch("/api/admin/applications");
      if (response.ok) {
        const data = await response.json();
        setApplications(data);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleView = (app: Application) => {
    setSelectedApp(app);
    setShowModal(true);
  };

  const handleApprove = async (applicationId: string) => {
    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "approved" }),
      });

      if (response.ok) {
        setApplications((prev) =>
          prev.map((app) =>
            app._id === applicationId ? { ...app, status: "approved" } : app,
          ),
        );
        if (selectedApp?._id === applicationId) {
          setSelectedApp((prev) =>
            prev ? { ...prev, status: "approved" } : null,
          );
        }
        toast.success("Application approved");
      }
    } catch (error) {
      console.error("Error approving application:", error);
      toast.error("Failed to approve application");
    }
  };

  const handleReject = async (applicationId: string) => {
    try {
      const response = await fetch(`/api/admin/applications/${applicationId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "rejected" }),
      });

      if (response.ok) {
        setApplications((prev) =>
          prev.map((app) =>
            app._id === applicationId ? { ...app, status: "rejected" } : app,
          ),
        );
        if (selectedApp?._id === applicationId) {
          setSelectedApp((prev) =>
            prev ? { ...prev, status: "rejected" } : null,
          );
        }
        toast.success("Application rejected");
      }
    } catch (error) {
      console.error("Error rejecting application:", error);
      toast.error("Failed to reject application");
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-500/20 text-green-700";
      case "rejected":
        return "bg-red-500/20 text-red-700";
      case "pending":
      default:
        return "bg-yellow-500/20 text-yellow-700";
    }
  };

  if (loading) {
    return <div>Loading applications...</div>;
  }

  return (
    <>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">Applications</h2>
          <span className="text-sm text-muted-foreground">
            {applications.length} total applications
          </span>
        </div>

        <div className="bg-background rounded-lg border border-muted-foreground/20 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-muted border-b border-muted-foreground/20">
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">Email</th>
                  <th className="px-6 py-3 text-left font-medium">Phone</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-right font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {applications.length === 0 ? (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-6 py-8 text-center text-muted-foreground"
                    >
                      No applications yet
                    </td>
                  </tr>
                ) : (
                  applications.map((app) => (
                    <tr
                      key={app._id}
                      className="border-b border-muted-foreground/10 hover:bg-muted/50 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium">
                        {app.firstName} {app.lastName}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {app.email}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground">
                        {app.phone}
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadgeColor(
                            app.status,
                          )}`}
                        >
                          {app.status.charAt(0).toUpperCase() +
                            app.status.slice(1)}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <Button
                            size="sm"
                            onClick={() => handleView(app)}
                            variant="outline"
                            className="gap-2"
                          >
                            <Eye size={16} />
                            View
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleApprove(app._id)}
                            disabled={app.status !== "pending"}
                            className="gap-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <CheckCircle size={16} />
                            Approve
                          </Button>
                          <Button
                            size="sm"
                            onClick={() => handleReject(app._id)}
                            disabled={app.status !== "pending"}
                            variant="outline"
                            className="gap-2 text-destructive hover:bg-destructive/10 disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <XCircle size={16} />
                            Reject
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedApp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-border sticky top-0 bg-background">
              <h3 className="text-xl font-bold">Application Details</h3>
              <button
                onClick={() => setShowModal(false)}
                className="text-muted-foreground hover:text-foreground"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Personal Information */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">
                  Personal Information
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">First Name</p>
                    <p className="font-medium">{selectedApp.firstName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Last Name</p>
                    <p className="font-medium">{selectedApp.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">{selectedApp.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">{selectedApp.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Date of Birth
                    </p>
                    <p className="font-medium">{selectedApp.dateOfBirth}</p>
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">
                  Educational Background
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Highest Education
                    </p>
                    <p className="font-medium">
                      {selectedApp.highestEducation}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Previous Institution
                    </p>
                    <p className="font-medium">
                      {selectedApp.university || "N/A"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Program Information */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">
                  Program Information
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">School</p>
                    <p className="font-medium">
                      {selectedApp.schoolName || selectedApp.school}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Program</p>
                    <p className="font-medium">
                      {selectedApp.programName || selectedApp.program}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Application Date
                    </p>
                    <p className="font-medium">
                      {new Date(selectedApp.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Status</p>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium inline-block ${getStatusBadgeColor(
                        selectedApp.status,
                      )}`}
                    >
                      {selectedApp.status.charAt(0).toUpperCase() +
                        selectedApp.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 border-t border-border flex gap-3 justify-end sticky bottom-0 bg-background">
              <Button variant="outline" onClick={() => setShowModal(false)}>
                Close
              </Button>
              {selectedApp.status === "pending" && (
                <>
                  <Button
                    onClick={() => handleApprove(selectedApp._id)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Approve
                  </Button>
                  <Button
                    onClick={() => handleReject(selectedApp._id)}
                    variant="outline"
                    className="text-destructive hover:bg-destructive/10"
                  >
                    Reject
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
