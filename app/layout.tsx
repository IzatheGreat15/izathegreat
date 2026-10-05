import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kathleen Iza Monzales | Full Stack Software Engineer",
  description: "Get to know Kathleen Iza Monzales, a Full Stack Software Engineer specializing in PHP, Laravel, and Typescript. Explore her expertise in designing, developing, and maintaining custom ERP, CRM, CMS, and business applications across various industries.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>

      <footer className="text-center bg-gray-900 text-sm p-4 text-gray-300">
        © Copyright  2026
      </footer>
    </html>
  );
}
