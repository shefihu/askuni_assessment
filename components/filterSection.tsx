"use client";

import { Transition, Dialog, Listbox } from "@headlessui/react";
import React, { Fragment, useState } from "react";

import FilterContent from "./filterContent";

interface Proptype {
  isOpen: boolean;
  closeModal: () => void;
}

const FilterSection = ({ isOpen, closeModal }: Proptype) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="absolute z-30 lg:hidden font-inter top-[0%] left-[10%] "
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
          <div className="fixed inset-0 bg-black bg-opacity-30 " />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="flex min-h-full items-center justify-start text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full  max-w-[310px] xl:max-w-full  overflow-hidden  border  bg-white  text-left h-screen transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-black "
                >
                  <FilterContent closeModal={closeModal} screen="modal" />
                </Dialog.Title>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default FilterSection;
