interface Campus {
  id: number;
  name: string;
}

interface Country {
  id: number;
  name: string;
}
interface EducationType {
  id: number;
  name: string;
}

interface Language {
  id: number;
  name: string;
}

interface UniversityType {
  id: number;
  name: string;
}

interface GradeType {
  id: number;
  name: string;
}

export const campuses: Campus[] = [
  { id: 1, name: "On Campus" },
  { id: 2, name: "Off Campus" },
];

export const countries: Country[] = [
  { id: 1, name: "Bosnia" },
  { id: 2, name: "Turkey" },
  { id: 3, name: "India" },
  { id: 4, name: "Malaysia" },
  { id: 5, name: "Ukraine" },
];

export const EducationTypes: EducationType[] = [
  { id: 1, name: "Full Time" },
  { id: 2, name: "Evening Period" },
  { id: 3, name: "Online" },
];

export const Languages: Language[] = [
  { id: 1, name: "Turkish" },
  { id: 2, name: "Chinese" },
  { id: 3, name: "German" },
  { id: 4, name: "French" },
  { id: 5, name: "Spanish" },
  { id: 6, name: "Russian" },
  { id: 7, name: "Arabic" },
  { id: 8, name: "30% English %70 Turkish" },
  { id: 9, name: "50% English %50 Turkish" },
  { id: 10, name: "30% Arabic %70 Turkish" },
];

export const UniversityTypes: UniversityType[] = [
  { id: 1, name: "Private" },
  { id: 2, name: "State" },
];

export const GradeTypes: GradeType[] = [
  { id: 1, name: "Bachelor Degree" },
  { id: 2, name: "Associate Degree" },
  { id: 3, name: "Master with Thesis" },
  { id: 4, name: "Master without Thesis" },
  { id: 5, name: "phD" },
];
