import React from "react";

const Footer = () => {
  return (
    <div className="shadow-[0_-5px_6px_-1px_rgba(0,0,0,0.1)] flex items-center justify-center h-full w-full ">
      <p className="text-center text-sm text-gray-500">
        © {new Date().getFullYear()} LunchApp. All rights reserved to Techwards.
      </p>
    </div>
  );
};

export default Footer;
