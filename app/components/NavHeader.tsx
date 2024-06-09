import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavHeader = () => {
  return (
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
  );
};

export default NavHeader;
