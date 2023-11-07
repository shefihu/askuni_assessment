"use client";

import React, { useEffect, useState } from "react";
import {
  NextButton,
  PageButton,
  Pagination,
  PrevButton,
} from "react-headless-pagination";
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import SingleUniversityCard from "./SingleUniversityCard";
import { useAppSelector } from "@/redux/hooks";
import { ProgramType } from "@/utils/types";
import {
  setCurrentProgramDisplayedLength,
  setCurrentProgramsData,
  setFilterQuery,
  setIsLoading,
} from "@/redux/slices/programSlices";
import { useAppDispatch } from "@/redux/hooks";
import { sortPrograms } from "@/utils/handleSortData";
import { buildQueryString } from "@/utils/buildFilterQueryString";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AllProgramsData } from "@/utils/data";
import { handleFilterPrograms } from "@/utils/handleFilter";
import { paginateArray } from "@/utils/handlePaginateArray";
import {
  EducationTypes,
  GradeTypes,
  Languages,
  UniversityTypes,
  campuses,
  countries,
} from "./inputsInFilter/inputOptions";
const UniversityCards = () => {
  const [page, setPage] = React.useState(0);
  const [currentPageData, setCurrentPageData] = useState([]);
  const {
    currentProgramsData,
    AllPrograms,
    sortCriteria,
    searchedPrograms,
    isSearchActive,
    filterQuery,
    isLoading,
  } = useAppSelector((state) => state.programs);

  const dispatch = useAppDispatch();
  const { replace } = useRouter();
  const pathname = usePathname();
  const [isFilterActive, setIsFilterActive] = useState(false);

  const [filteredData, setFilteredData] = useState([]);
  const [currentFilterPageData, setCurrentFilterPageData] = useState([]);
  const [filterPage, setFilterPage] = useState(0);

  let itemsPerPage = 10;

  const handlePageChange = (page: number) => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setPage(page);
  };

  const handlePageChangeFilter = (page: number) => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);
    setFilterPage(page);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // get all queries
  const searchParams = useSearchParams();

  const q = searchParams.get("q") || "";
  const country =
    searchParams
      .get("country")
      ?.split(",")
      ?.map((elem) => {
        return countries[Number(elem) - 1];
      }) || [];
  const campus_type =
    searchParams
      .get("campus_type")
      ?.split(",")
      ?.map((elem) => {
        return campuses[Number(elem) - 1];
      }) || [];
  const grade_type =
    searchParams
      .get("grade_type")
      ?.split(",")
      ?.map((elem) => {
        return GradeTypes[Number(elem) - 1];
      }) || [];
  const education_type =
    searchParams
      .get("education_type")
      ?.split(",")
      ?.map((elem) => {
        return EducationTypes[Number(elem) - 1];
      }) || [];
  const provider_type =
    searchParams
      .get("provider_type")
      ?.split(",")
      ?.map((elem) => {
        return UniversityTypes[Number(elem) - 1];
      }) || [];
  const education_language =
    searchParams
      .get("education_language")
      ?.split(",")
      ?.map((number) => {
        return Languages[Number(number) - 1];
      }) || [];

  useEffect(() => {
    dispatch(
      setFilterQuery({
        ...filterQuery,
        q,
        country,
        campus_type,
        grade_type,
        education_language,
        education_type,
        provider_type,
      })
    );
  }, []);

  // all programs clone
  useEffect(() => {
    dispatch(setIsLoading(true));
    dispatch(setCurrentProgramsData(AllPrograms));

    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 2000);
  }, [AllPrograms]);

  // filter logic
  useEffect(() => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      dispatch(setIsLoading(false));
    }, 1000);

    buildQueryString(filterQuery, replace, pathname);

    setFilterPage(0);

    handleFilterPrograms(
      setIsFilterActive,
      setFilteredData,
      filterPage,
      itemsPerPage,
      setCurrentFilterPageData
    );
  }, [
    filterQuery,
    currentProgramsData,
    sortCriteria,
    isSearchActive,
    searchedPrograms,
    pathname,
  ]);

  // filter pagination
  useEffect(() => {
    isFilterActive &&
      filteredData.length > 0 &&
      dispatch(setCurrentProgramDisplayedLength(filteredData.length));

    filteredData.length > 0 &&
      paginateArray(
        filteredData,
        filterPage,
        itemsPerPage,
        setCurrentFilterPageData
      );
  }, [filteredData, filterPage]);

  // normal program list pagination
  useEffect(() => {
    let data =
      currentProgramsData.length > 1 && !isSearchActive && !isFilterActive
        ? [...currentProgramsData]
        : [...searchedPrograms];

    let sortedData = sortPrograms(data, sortCriteria);

    !isFilterActive &&
      dispatch(setCurrentProgramDisplayedLength(sortedData.length));

    !isFilterActive &&
      paginateArray(sortedData, page, itemsPerPage, setCurrentPageData);
  }, [
    currentProgramsData,
    page,
    sortCriteria,
    isSearchActive,
    searchedPrograms,
    isFilterActive,
  ]);

  return (
    <>
      {isLoading ? (
        <section className=" grid-cols-1 grid gap-5 mt-7 pb-[100px]">
          <h2>Loading...</h2>
        </section>
      ) : (
        <section className=" grid-cols-1 grid gap-5 mt-7 pb-[100px]">
          {(currentProgramsData.length > 1 && !isFilterActive) || isSearchActive
            ? currentPageData.map((program, index) => {
                return <SingleUniversityCard key={index} program={program} />;
              })
            : null}

          {isFilterActive
            ? currentFilterPageData.map((program, index) => {
                return <SingleUniversityCard key={index} program={program} />;
              })
            : null}

          {currentProgramsData.length > 1 &&
          !isSearchActive &&
          !isFilterActive ? (
            <Pagination
              className="flex items-center w-full justify-center h-10 text-sm select-none"
              currentPage={page}
              edgePageCount={2}
              middlePagesSiblingCount={1}
              setCurrentPage={handlePageChange}
              totalPages={Math.ceil(currentProgramsData.length / itemsPerPage)}
              truncableClassName="w-10 px-0.5 text-center"
              truncableText="..."
            >
              <PrevButton className="flex items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none cursor-pointer">
                <FiArrowLeft className="mr-3" size={20} />
              </PrevButton>
              <ul className="flex items-center justify-center ">
                <PageButton
                  activeClassName="bg-gray-200 text-gray-700 "
                  className="flex items-center p-2 justify-center h-10 w-10 rounded-full cursor-pointer"
                  inactiveClassName="text-gray-600"
                />
              </ul>
              <NextButton className="flex items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none cursor-pointer">
                <FiArrowRight className="ml-3" size={20} />
              </NextButton>
            </Pagination>
          ) : null}
          {isSearchActive && searchedPrograms.length > 1 ? (
            <Pagination
              className="flex items-center w-full justify-center h-10 text-sm select-none"
              currentPage={page}
              edgePageCount={2}
              middlePagesSiblingCount={1}
              setCurrentPage={handlePageChange}
              totalPages={Math.ceil(searchedPrograms.length / itemsPerPage)}
              truncableClassName="w-10 px-0.5 text-center"
              truncableText="..."
            >
              <PrevButton className="flex items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none  cursor-pointer">
                <FiArrowLeft className="mr-3" size={20} />
              </PrevButton>
              <ul className="flex items-center justify-center ">
                <PageButton
                  activeClassName="bg-gray-200 text-gray-700 "
                  className="flex items-center p-2 justify-center h-10 w-10 rounded-full cursor-pointer"
                  inactiveClassName="text-gray-600"
                />
              </ul>
              <NextButton className="flex items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none cursor-pointer">
                <FiArrowRight className="ml-3" size={20} />
              </NextButton>
            </Pagination>
          ) : null}
          {isFilterActive && !isSearchActive && filteredData.length > 1 ? (
            <Pagination
              className="flex items-center w-full justify-center h-10 text-sm select-none"
              currentPage={filterPage}
              edgePageCount={2}
              middlePagesSiblingCount={1}
              setCurrentPage={handlePageChangeFilter}
              totalPages={Math.ceil(filteredData.length / itemsPerPage)}
              truncableClassName="w-10 px-0.5 text-center"
              truncableText="..."
            >
              <PrevButton className="flex  items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none  cursor-pointer">
                <FiArrowLeft className="mr-3" size={20} />
              </PrevButton>
              <ul className="flex items-center justify-center ">
                <PageButton
                  activeClassName="bg-gray-200 text-gray-700 "
                  className="flex items-center p-2 justify-center h-10 w-10 rounded-full cursor-pointer"
                  inactiveClassName="text-gray-600"
                />
              </ul>
              <NextButton className="flex items-center mr-2 text-gray-600 hover:text-gray-600 hover:bg-gray-100 focus:outline-none cursor-pointer">
                <FiArrowRight className="ml-3" size={20} />
              </NextButton>
            </Pagination>
          ) : null}
        </section>
      )}
    </>
  );
};

export default UniversityCards;
