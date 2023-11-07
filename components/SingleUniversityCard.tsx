import React from "react";
import Image from "next/image";
import { HiLanguage } from "react-icons/hi2";
import { BiTime } from "react-icons/bi";
import { ProgramType } from "@/utils/types";

interface PropType {
  program: ProgramType;
}

const SingleUniversityCard = ({ program }: PropType) => {
  return (
    <section className="py-[10px] px-2 xl:px-4 w-full border border-gray-400 rounded-xl flex flex-col justify-center items-center md:flex md:flex-row gap-2">
      <Image
        src="/images/Arel.webp"
        alt="uni"
        width={269}
        height={192}
        className="rounded-[16px]"
      />
      <div className="flex flex-col xl:items-start items-center justify-center xl:pl-4">
        <h4>{program.universityName}</h4>
        <p className="mt-2 lg:mt-1 text-gray-500">
          {program.universityType} University
        </p>
        <p className="mt-3 lg:mt-1">{program.course}</p>
        <div className="flex mt-2  lg:justify-start items-center lg:items-start justify-center gap-1 w-full flex-wrap">
          <div className="min-w-max p-1 px-2 h-[24px] flex justify-between gap-1 items-center border border-green-500 rounded-[8px]  text-[15px] text-green-600">
            <HiLanguage /> <p>{program.educationLanguage}</p>
          </div>

          <div className="flex justify-center items-center gap-1 flex-wrap">
            <div className="min-w-max p-1 px-2 h-[24px] flex justify-between gap-1 items-center border border-orange-500 rounded-[8px]  text-[15px] text-orange-600">
              <HiLanguage /> <p>1.5 year</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 flex-wrap">
            <div className="min-w-max p-1 px-2 h-[24px] flex justify-between gap-1 items-center border border-blue-500 rounded-[8px]  text-[15px] text-blue-600">
              <BiTime /> <p>{program.educationType}</p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 flex-wrap">
            <div className="min-w-max p-1 px-2 h-[24px] flex justify-between gap-1 items-center border border-purple-500 rounded-[8px]  text-[15px] text-purple-600">
              <HiLanguage /> <p>{program.gradeType}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center xl:border-l xl:border-gray-300 xl:pl-2">
        <article className="flex  items-center mt-[2px]  flex-col ">
          <p className="text-gray-500 line-through text-[18px] xl:text-[16px]">
            {program.fee} USD
          </p>
          <h6 className="text-blue-400  text-[18px] xl:text-[24px]">
            {program?.discountFee} USD
          </h6>
        </article>
        <div className="min-w-max p-1 mt-1 px-2 h-[24px] flex justify-between gap-1 items-center border border-green-500 rounded-[8px]  text-[15px] text-green-600">
          <HiLanguage /> <p>Full Tuition</p>
        </div>

        <div className="px-5 w-full">
          {" "}
          <div className="w-full  border my-[5px] border-gray-300"></div>
        </div>
        <div className="flex items-center gap-1 text-gray-500">
          <p>Deadline:</p>
          <p className="text-red-600">11/30/2023</p>
        </div>
        <div className="flex justify-center text-[16px] items-center gap-1 mt-1 text-gray-500">
          <p className="0 text-center"> Season: 2023 Fall (September 2023)</p>
        </div>
        <div className="px-5 w-full">
          {" "}
          <button
            disabled
            className="bg-[#0288D1] rounded-xl mt-1 disabled:cursor-not-allowed shadow-md w-full text-white h-[36px] flex justify-center items-center mb-2"
          >
            Apply
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleUniversityCard;
