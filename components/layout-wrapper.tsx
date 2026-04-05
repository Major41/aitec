"use client";

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdminPanel = pathname.startsWith("/admin-panel");

  return (
    <>
      {!isAdminPanel && <Header />}
      <main className="min-h-screen">{children}</main>
      {!isAdminPanel && <Footer />}
    </>
  );
}
