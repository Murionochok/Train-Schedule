import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/ui/common/Header";

export const metadata: Metadata = {
  title: "Train Scheduler",
  description: "Test application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col flex-auto">
        <Header />
        {children}
      </body>
    </html>
  );
}
