import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "希構整合工作室 XIGOU Studio",
  description:
    "希構整合工作室提供個別化教學、學習策略規劃、家長合作與跨專業合作服務。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant">
      <body className="min-h-screen bg-white text-[#2F2A3A]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}