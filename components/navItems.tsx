import React from "react";

interface Proptype {
  view: string;
}

const NavItem = ({ view }: Proptype) => {
  return (
    <div
      className={`bg-white h-screen max-w-full ${view !== "modal" && "hidden"}`}
    >
      <ul className="flex flex-col items-start mt-6 w-full">
        <li className="text-gray-700 h-[64px] border-b flex justify-start items-center px-4 pl-8 border-b-gray-300 w-full">
          Universities
        </li>
        <li className="text-gray-700 h-[64px] border-b flex justify-start items-center px-4 pl-8 border-b-gray-300 w-full">
          About Us
        </li>
        <li className="text-gray-700 h-[64px] border-b flex justify-start items-center px-4 pl-8 border-b-gray-300 w-full">
          How to Apply?
        </li>
        <li className="text-gray-700 h-[64px] border-b flex justify-start items-center px-4 pl-8 border-b-gray-300 w-full">
          Partner
        </li>
        <li className="text-gray-700 h-[64px] border-b flex justify-start items-center px-4 pl-8 border-b-gray-300 w-full">
          Fairs
        </li>
        <li className="cursor-pointer h-[64px] border-b flex justify-start items-center px-4 pl-8 bg-gray-700 text-white w-full">
          Sign Up
        </li>
      </ul>
    </div>
  );
};

export default NavItem;
