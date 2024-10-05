
import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "QR Code- Sphinx 2024",
  description: "Sphinx 2024 is the premier Techno-Management Fest that brings together students, educators, professionals, and innovators from across the nation to celebrate the intersection of technology, management, and creativity. ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script src="../components/qrcode.js" type="text/javascript"/>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
       
        <div className="flex flex-col items-center  gap-5" style={{width:"100vw",minWidth:"100vw",maxWidth:"100vw"}}>
        {children}
        </div>
      </body>
    </html>
  );
}
