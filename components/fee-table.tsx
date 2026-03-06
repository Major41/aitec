"use client";

interface FeeTableProps {
  data: Array<{
    programType: string;
    duration: string;
    tuitionPerYear: string;
    hostelPerYear: string;
    libraryAndLabs: string;
    activities: string;
    totalPerYear: string;
    totalProgram: string;
    notes: string;
  }>;
}

export function FeeTable({ data }: FeeTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-primary text-primary-foreground">
            <th className="border border-border px-4 py-3 text-left font-semibold">
              Program Type
            </th>
            <th className="border border-border px-4 py-3 text-left font-semibold">
              Duration
            </th>
            <th className="border border-border px-4 py-3 text-center font-semibold">
              Tuition/Year
            </th>
            <th className="border border-border px-4 py-3 text-center font-semibold">
              Hostel/Year
            </th>
            <th className="border border-border px-4 py-3 text-center font-semibold">
              Labs & Library
            </th>
            <th className="border border-border px-4 py-3 text-center font-semibold">
              Total/Year
            </th>
            <th className="border border-border px-4 py-3 text-center font-semibold">
              Total Program
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-background" : "bg-muted/30"}
            >
              <td className="border border-border px-4 py-3">
                <div>
                  <p className="font-semibold text-foreground">
                    {row.programType}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {row.notes}
                  </p>
                </div>
              </td>
              <td className="border border-border px-4 py-3 text-center">
                {row.duration}
              </td>
              <td className="border border-border px-4 py-3 text-center font-medium">
                {row.tuitionPerYear}
              </td>
              <td className="border border-border px-4 py-3 text-center">
                {row.hostelPerYear}
              </td>
              <td className="border border-border px-4 py-3 text-center">
                {row.libraryAndLabs}
              </td>
              <td className="border border-border px-4 py-3 text-center font-semibold text-accent">
                {row.totalPerYear}
              </td>
              <td className="border border-border px-4 py-3 text-center font-bold text-primary">
                {row.totalProgram}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
