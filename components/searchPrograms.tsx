"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  setCurrentProgramsData,
  setFilterQuery,
  setIsSearchActive,
  setSearchedPrograms,
} from "@/redux/slices/programSlices";
import { AllProgramsData } from "@/utils/data";
import { Input } from "@material-tailwind/react";
import { usePathname, useRouter } from "next/navigation";

import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const SearchPrograms = () => {
  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [query, setQuery] = useState("");
  const { orderAndPerPagePath, currentProgramsData, filterQuery } =
    useAppSelector((state) => state.programs);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 0) {
      dispatch(setIsSearchActive(true));
    }
    if (e.target.value.length <= 0) {
      dispatch(setIsSearchActive(false));
    }
    if (!e.target.value.trim()) {
      dispatch(setCurrentProgramsData(AllProgramsData));
    }
    setQuery(e.target.value);

    dispatch(setFilterQuery({ ...filterQuery, q: e.target.value }));

    let searchedData = currentProgramsData.filter(
      (program) =>
        program.course
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase()) ||
        program.universityName
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase()) ||
        program.country
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase()) ||
        program.gradeType
          .toLowerCase()
          .includes(e.target.value.trim().toLowerCase())
    );

    dispatch(setSearchedPrograms(searchedData));
  };
  return (
    <div className="w-full mt-6">
      <Input
        crossOrigin="true"
        label="Type Interested Program"
        size="lg"
        color="blue"
        style={{ borderRadius: "12px" }}
        icon={<CiSearch className="text-gray-400 text-[16px] bg-white" />}
        value={query}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchPrograms;
