import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/banner.png"
          alt="Banner img"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute top-0 left-0 w-1/2 h-full ml-52 -mt-9 flex flex-col justify-center ">
        <h4 className="text-yellow-500">
          -- We Provide remarkable IT Services
        </h4>
        <h1 className="text-8xl font-black mt-10">Let&apos;s build it</h1>
        <h1 className="text-8xl font-black mt-4">while you chill!</h1>
        <Link
          href="/contact"
          className="text-white bg-yellow-500 w-52 p-4 mt-12 block text-center font-bold"
        >
          Free Consulting
        </Link>
      </div>
    </div>
  );
};

export default Banner;
