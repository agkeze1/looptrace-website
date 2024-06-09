import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Components imports
import InfoHeader from "./components/InfoHeader";
import NavHeader from "./components/NavHeader";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Information Header */}
        <InfoHeader />
        {/* Header */}
        <NavHeader />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
