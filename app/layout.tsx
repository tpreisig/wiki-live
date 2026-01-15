import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Wiklive",
  description: "Build by TPower",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-indigo-900 flex flex-col min-h-100vh"
      >
        <header><Navbar /></header>
        <main className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}
