import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "Daniel Capurro | Associate Professor in Clinical AI",
  description: "Academic website of Daniel Capurro, Associate Professor in Clinical AI at the University of Melbourne",
  metadataBase: new URL('https://dcapurro.github.io/academic-website'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-100`}
      >
        <nav className="fixed w-full bg-gray-800/80 backdrop-blur-sm p-4 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Daniel Capurro</h1>
                        <div className="space-x-6">
              <Link href="/" className="hover:text-blue-400">Home</Link>
              <Link href="/publications" className="hover:text-blue-400">Publications</Link>
              <Link href="/projects" className="hover:text-blue-400">Projects</Link>
              <Link href="/teaching" className="hover:text-blue-400">Teaching</Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto pt-24 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
