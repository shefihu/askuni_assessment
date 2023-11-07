import { ProgramType } from "./types";

export function paginateArray(
  array: ProgramType[],
  currentPage: number,
  itemsPerPage: number,
  setCurrentPageData: React.Dispatch<React.SetStateAction<any[]>>
) {
  const startIndex = currentPage * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, array.length);

  const currentPageData = array.slice(startIndex, endIndex);

  console.log(currentPageData, array);

  setCurrentPageData(currentPageData);
}
