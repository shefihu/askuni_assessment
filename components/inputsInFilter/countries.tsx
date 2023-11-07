"use client";

import React, { Fragment, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { RiArrowDownSFill } from "react-icons/ri";
import { TiTick } from "react-icons/ti";
import { Transition, Dialog, Listbox } from "@headlessui/react";
import { useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setFilterQuery } from "@/redux/slices/programSlices";
import { countries } from "./inputOptions";

interface Country {
  id: number;
  name: string;
}

const Countries = () => {
  const dispatch = useAppDispatch();
  const searchParams = useSearchParams();
  const { filterQuery } = useAppSelector((state) => state.programs);

  const country = searchParams.get("country");

  const [selectedCountry, setSelectedCountry] = useState<Country[]>(
    country?.split(",")?.map((number) => {
      return countries[Number(number) - 1];
    }) || []
  );

  const [entireQuery, setEntireQuery] = useState<{
    q: string;
    country: {
      id: number;
      name: string;
    }[];
    campus_type: {
      id: number;
      name: string;
    }[];
    grade_type: {
      id: number;
      name: string;
    }[];
    education_type: {
      id: number;
      name: string;
    }[];
    provider_type: {
      id: number;
      name: string;
    }[];
    education_language: {
      id: number;
      name: string;
    }[];
  }>();

  useEffect(() => {
    setEntireQuery({ ...filterQuery });
  }, [filterQuery]);

  useEffect(() => {
    if (
      JSON.stringify({
        q: "",
        country: [],
        campus_type: [],
        grade_type: [],
        education_type: [],
        provider_type: [],
        education_language: [],
      }) === JSON.stringify(entireQuery)
    ) {
      setSelectedCountry([]);
    }
  }, [entireQuery]);

  function isSelected(value) {
    return selectedCountry.find((el) => el.id === value.id) ? true : false;
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedCountryUpdated = [
        ...selectedCountry,
        countries.find((el) => el.id === value.id),
      ];

      dispatch(
        setFilterQuery({
          ...filterQuery,
          country: selectedCountryUpdated.map((country) => country),
        })
      );
      setSelectedCountry(selectedCountryUpdated);
    } else {
      handleDeselect(value);
    }
  }

  function handleDeselect(value) {
    const selectedCountryUpdated = selectedCountry.filter(
      (el) => el.id !== value.id
    );
    setSelectedCountry(selectedCountryUpdated);

    dispatch(
      setFilterQuery({
        ...filterQuery,
        country: selectedCountryUpdated.map((country) => country),
      })
    );
  }
  return (
    <article>
      <h3 className="mt-2 leading-5 text-gray-600  mb-2">Country</h3>
      <Listbox
        value={selectedCountry}
        onChange={(value) => handleSelect(value)}
      >
        {({ open }) => (
          <>
            <div className="relative w-full min-h-[42px]">
              <Listbox.Button
                type="button"
                className="relative flex justify-between items-center flex-wrap w-full min-h-[42px]  cursor-pointer focus-within:border-blue-400 active:border-blue-700   rounded-[14px] border border-gray-400 px-4 p-2
                           "
              >
                <span className="block  capitalize  text-gray-600 text-[13px]">
                  {selectedCountry.length < 1
                    ? "Select Country"
                    : selectedCountry.map((person) => person.name).join(", ")}
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
                  {countries.map((country, index) => {
                    const selected = isSelected(country);
                    return (
                      <Listbox.Option
                        key={index}
                        className={({ active, selected }) =>
                          `relative cursor-pointer select-none rounded bg-white  px-4 py-[6px] hover:bg-gray-100  transition duration-300 ${
                            selected ? "bg-gray-200" : "bg-white"
                          }`
                        }
                        value={country}
                      >
                        <div className="flex items-center gap-3">
                          {selected && (
                            <span className="flex items-center pl-3 text-amber-600">
                              <TiTick className="h-5 w-5" aria-hidden="true" />
                            </span>
                          )}
                          <span
                            className={`block truncate capitalize text-[13px] ${
                              selected ? "font-medium" : "font-normal ml-[42px]"
                            }`}
                          >
                            {country.name}
                          </span>
                        </div>
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </article>
  );
};

export default Countries;
