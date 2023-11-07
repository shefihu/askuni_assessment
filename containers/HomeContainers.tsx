"use client";

import React, { Fragment, useEffect, useState } from "react";
import Header from "@/components/Header";
import { CgArrowRightO } from "react-icons/cg";
import { RiArrowDownSFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import SingleUniversityCard from "@/components/SingleUniversityCard";
import UniversityCards from "@/components/universityCard";
import { Input } from "@material-tailwind/react";
import { Listbox, Transition } from "@headlessui/react";
import { BsChevronDown } from "react-icons/bs";
import { TiTick } from "react-icons/ti";
import { OrderingValuesType } from "@/utils/types";
import FilterSection from "@/components/filterSection";
import FilterContent from "@/components/filterContent";
import Footer from "@/components/footer";
import {
  useSearchParams,
  useParams,
  useRouter,
  usePathname,
} from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setOrderAndPerPagePath,
  setSortCriteria,
} from "@/redux/slices/programSlices";
import SearchPrograms from "@/components/searchPrograms";

const HomeContainers = () => {
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const { sortCriteria, currentProgramDisplayedLength } = useAppSelector(
    (state) => state.programs
  );
  const [orderingValues, setOrderingValues] = useState<OrderingValuesType[]>([
    { name: "featured", value: "rank" },
    { name: "low to high", value: "discounted_price" },
    { name: "high to value", value: "-discounted_price" },
  ]);
  const [selectedOrder, setSelectedOrder] = useState<OrderingValuesType | null>(
    { name: "featured", value: "rank" } || null
  );

  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const pathname = usePathname();

  const handleOrderingValueSelect = (selectedOrder: OrderingValuesType) => {
    dispatch(
      setSortCriteria(
        selectedOrder.value as "rank" | "-disocunted_price" | "discounted_price"
      )
    );

    setSelectedOrder(selectedOrder);
  };

  function closeModal() {
    setIsFilterModalOpen(false);
  }

  function openModal() {
    setIsFilterModalOpen(true);
  }

  useEffect(() => {
    dispatch(
      setOrderAndPerPagePath(`limit=${10}&ordering=-can_apply,${sortCriteria}`)
    );

    replace(`${pathname}?/limit=${10}&ordering=-can_apply,${sortCriteria}`);
  }, [sortCriteria]);

  return (
    <>
      {" "}
      <FilterSection isOpen={isFilterModalOpen} closeModal={closeModal} />
      <section className="bg-gray-50 w-full">
        <Header />
        <div className="lg:grid mt-[40px] lg:grid-cols-[25%_75%] gap-6  justify-center xl:max-w-[1280px] mx-auto 2xl:px-0 lg:gap-10">
          <FilterContent closeModal={() => {}} screen="screen" />
          <div className="mt-[100px] w-full px-5  lg:max-w-full mx-auto md:w-full">
            <h3 className="text-black font-poppins font-semibold capitalize text-center text-2xl lg:text-4xl ">
              Find Your dream programs
            </h3>
            <div className="flex flex-wrap w-full items-center mt-4 gap-4 justify-between">
              <p className="w-full lg:w-auto text-gray-500">
                We found {currentProgramDisplayedLength || 0} programs fo you
              </p>
              <button
                className="min-w-[115px] h-[40px] flex justify-center rounded-[14px] items-center border lg:hidden border-gray-400 gap-2"
                onClick={openModal}
              >
                <CgArrowRightO className="text-gray-400" />
                <h5 className="capitalize text-gray-700 text-[13px]">
                  Filters
                </h5>
              </button>

              <Listbox
                value={selectedOrder}
                onChange={handleOrderingValueSelect}
              >
                {({ open }) => (
                  <>
                    <div className="relative min-w-[118px] h-[40px]">
                      <Listbox.Button
                        type="button"
                        className="relative flex justify-between items-center w- h-[40px] w-full cursor-pointer focus-within:border-blue-400 active:border-blue-700   rounded-[14px] border border-gray-400 px-4 p-2
                           "
                      >
                        <span className="block truncate capitalize  text-gray-600 text-[13px]">
                          {selectedOrder ? selectedOrder?.name : "Sort"}
                        </span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                          <RiArrowDownSFill className="text-gray-400 text-[13px]" />
                        </span>
                      </Listbox.Button>
                      <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-0 ring-transparent focus:outline-none sm:text-sm z-10">
                          {orderingValues.map((order, index) => (
                            <Listbox.Option
                              key={index}
                              className={({ active, selected }) =>
                                `relative cursor-pointer select-none rounded bg-white  px-4 py-[6px] hover:bg-gray-100  transition duration-300 ${
                                  selected ? "bg-gray-200" : "bg-white"
                                }`
                              }
                              value={order}
                            >
                              {({ selected }) => (
                                <>
                                  <span
                                    className={`block truncate capitalize text-[13px] ${
                                      selected ? "font-medium" : "font-normal"
                                    }`}
                                  >
                                    {order.name}
                                  </span>
                                </>
                              )}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </>
                )}
              </Listbox>
            </div>

            <SearchPrograms />

            <UniversityCards />
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
};

export default HomeContainers;
