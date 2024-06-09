import React from "react";
// icons
import IconLocation from "../icons/Location";
import IconEmail from "../icons/Email";
import IconFacebook from "../icons/Facebook";
import IconTwitter from "../icons/Twitter";
import IconInstagram from "../icons/Instagram";
import IconLinkedIn from "../icons/LinkedIn";

const InfoHeader = () => {
  return (
    <div className="px-16 py-3 bg-black text-white flex justify-between">
      <div className="flex items-center">
        <div className="flex items-center">
          <IconLocation className="mr-4 text-yellow-500" />
          <p className="text-sm">Block 83, Coal City Garden Estate, Enugu</p>
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
  );
};

export default InfoHeader;
