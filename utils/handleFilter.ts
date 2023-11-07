import { store } from "@/redux/store";
import { sortPrograms } from "./handleSortData";
import { paginateArray } from "./handlePaginateArray";

export function handleFilterPrograms(
  setIsFilterActive,
  setFilteredData,
  filterPage,
  itemsPerPage,
  setCurrentFilterPageData
) {
  const {
    currentProgramsData,
    AllPrograms,
    filterQuery,
    isSearchActive,
    searchedPrograms,
    sortCriteria,
  } = store.getState().programs;

  const {
    country,
    education_language,
    campus_type,
    education_type,
    grade_type,
    provider_type,
  } = filterQuery;
  let data =
    currentProgramsData.length > 1 && !isSearchActive
      ? [...AllPrograms]
      : [...searchedPrograms];

  let sortedData = sortPrograms(data, sortCriteria);

  let truthyConditions: boolean[];
  const filteredData = sortedData.filter((program) => {
    truthyConditions = [];
    const countryMatch =
      country.length === 0
        ? null
        : country.some((c) => c.name === program.country);
    const campusMatch =
      campus_type.length === 0
        ? null
        : campus_type.some((c) => c.name === program.campusType);
    const providerMatch =
      provider_type.length === 0
        ? null
        : provider_type.some((p) => p.name === program.universityType);
    const languageMatch =
      education_language.length === 0
        ? null
        : education_language.some((l) => l.name === program.educationLanguage);
    const typeMatch =
      education_type.length === 0
        ? null
        : education_type.some((t) => t.name === program.educationType);
    const gradeMatch =
      grade_type.length === 0
        ? null
        : grade_type.some((g) => g.name === program.gradeType);

    if (countryMatch) truthyConditions.push(countryMatch);

    if (campusMatch) truthyConditions.push(campusMatch);
    if (providerMatch) truthyConditions.push(providerMatch);
    if (languageMatch) truthyConditions.push(languageMatch);
    if (typeMatch) truthyConditions.push(typeMatch);
    if (gradeMatch) truthyConditions.push(gradeMatch);

    if (truthyConditions.length > 0) {
      setIsFilterActive(true);
      return truthyConditions.join(" && ");
    } else {
      return false;
    }
  });

  setFilteredData(filteredData);
  if (truthyConditions?.length === 0 && filteredData.length === 0) {
    setIsFilterActive(false);
  }

  console.log(sortedData.length, filteredData.length);

  filteredData.length > 0 &&
    paginateArray(
      filteredData,
      filterPage,
      itemsPerPage,
      setCurrentFilterPageData
    );
}
