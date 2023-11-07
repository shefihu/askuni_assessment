"use client";
import React, { useState } from "react";
import { GrMenu } from "react-icons/gr";
import Navbar from "./navbar";
import NavItem from "./navItems";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <header className="w-full bg-white">
      <div className="h-[80px] px-[40px] lg:px-[120px] fixed  top-0 bg-white z-[9999] flex justify-between w-full  items-center shadow-sm  mx-auto">
        <div className="font-bold text-3xl ">askuni</div>
        <Navbar isOpen={isOpen} closeModal={closeModal} />
        <NavItem view="screen" />
        <GrMenu
          className="lg:hidden flex w-6 h-6 text-gray-700 cursor-pointer"
          onClick={openModal}
        />
        <ul className="lg:flex hidden space-x-[30px] items-center ">
          <li className="text-[#2c3e50] ">Universities</li>
          <li className="text-[#2c3e50] ">About Us</li>
          <li className="text-[#2c3e50]">How to Apply?</li>
          <li className="text-[#2c3e50] ">Partner</li>
          <li className="text-[#2c3e50] ">Fairs</li>
          <li className="bg-[#0195ff] rounded-[4px] mt-1 disabled:cursor-not-allowed shadow-md px-[30px] h-[42px] text-white py-[5px] flex justify-center items-center ">
            Sign Up
          </li>
          <li className="relative">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="w-[40px] h-[40px] flex justify-center items-center rounded-full hover:bg-gray-100 transition ease-in duration-100"
            >
              <Image
                src="/images/language.png"
                alt="language"
                width={25}
                height={25}
                className=""
              />
            </button>
            {languageOpen && (
              <ul className="w-[177px]  bg-white rounded-[6px] py-[8px] shadow-md absolute top-12  -right-10 ">
                <li className="py-[5px] px-[10px] hover:bg-gray-100 transition ease-in duration-100">
                  Turkish
                </li>
                <li className="py-[5px] px-[10px] hover:bg-gray-100 transition ease-in duration-100">
                  English
                </li>
                <li className="py-[5px] px-[10px] hover:bg-gray-100 transition ease-in duration-100">
                  Chinese
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
