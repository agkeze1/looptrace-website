import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// icons
import IconLocation from "./icons/Location";
import IconEmail from "./icons/Email";
import IconFacebook from "./icons/Facebook";
import IconTwitter from "./icons/Twitter";
import IconInstagram from "./icons/Instagram";
import IconLinkedIn from "./icons/LinkedIn";
import Image from "next/image";
import Link from "next/link";

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
        {/* Contact information bar */}
        <div className="px-16 py-3 bg-black text-white flex justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <IconLocation className="mr-4 text-yellow-500" />
              <p className="text-sm">
                Block 83, Coal City Garden Estate, Enugu
              </p>
            </div>
            <span className="mx-5 text-gray-600">|</span>
            <div className="flex items-center">
              <IconEmail className="mr-4 text-yellow-500" />
              <p className="text-sm">info@looptrace.ng</p>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#" className="ml-6 text-yellow-500">
              <IconFacebook />
            </a>
            <a href="#" className="ml-6 text-yellow-500">
              <IconTwitter />
            </a>
            <a href="#" className="ml-6 text-yellow-500">
              <IconInstagram />
            </a>
            <a href="#" className="ml-6 text-yellow-500">
              <IconLinkedIn />
            </a>
          </div>
        </div>
        {/* Header */}
        <header className="bg-white px-16 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo-icon.png"
              alt="Looptrace Logo"
              className="dark:invert"
              width={150}
              height={50}
              priority
            />
            <div className="-ml-7">
              <p className="text-2xl font-black">Looptrace</p>
              <p className="text-xs text-teal-700">We build, you chill</p>
            </div>
          </div>
          <div className="h-24">
            <Link
              href="/home"
              className="mx-4 font-bold hover:text-yellow-500 border-b-2 border-white hover:border-yellow-500 h-full inline-flex items-center justify-center"
            >
              Home
            </Link>
            <Link
              href="/services"
              className="mx-4 font-bold hover:text-yellow-500 border-b-2 border-white hover:border-yellow-500 h-full inline-flex items-center justify-center"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="mx-4 font-bold hover:text-yellow-500 border-b-2 border-white hover:border-yellow-500 h-full inline-flex items-center justify-center"
            >
              Contact
            </Link>
          </div>
        </header>
        {children}
        <footer>
          <h1>This is the footer</h1>
        </footer>
      </body>
    </html>
  );
}
