"use client";

import { Transition, Dialog, Listbox } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import NavItem from "./navItems";
import { CgClose } from "react-icons/cg";

interface Proptype {
  isOpen: boolean;
  closeModal: () => void;
}

const Navbar = ({ isOpen, closeModal }: Proptype) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="absolute lg:hidden z-[99999] font-inter top-[0%] right-[10%] "
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-30 m " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-end text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-[70%]  max-w-[350px]   overflow-hidden  border  bg-white  text-left h-screen transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-black "
                >
                  <NavItem view="modal" />
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
        <div className="w-[30%] sm:w-[calc(100%-350px)] fixed top-0 left-0 h-[80px] bg-white px-5 flex justify-end duration-100 items-center">
          <CgClose
            className="w-7 h-7 text-gray-600 transition ease cursor-pointer"
            onClick={closeModal}
          />
        </div>
      </Dialog>
    </Transition>
  );
};

export default Navbar;
