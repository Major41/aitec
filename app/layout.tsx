import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LayoutWrapper } from "@/components/layout-wrapper";
import "./globals.css";


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AITEC - African International Technical College",
  description:
    "African International Technical College (AITEC) is a premier educational institution dedicated to providing cutting-edge education in technology and engineering fields.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/logo1.jpeg",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/logo1.jpeg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/logo1.jpeg",
        type: "image/svg+xml",
      },
    ],
    apple: "/logo1.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <LayoutWrapper>{children}</LayoutWrapper>
        <Analytics />
      </body>
    </html>
  );
}
