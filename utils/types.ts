export interface OrderingValuesType {
  name: string;
  value: string;
}

export interface ProgramType {
  universityName: string;
  universityType: "Private" | "State";
  country: "India" | "Malaysia" | "Turkey" | "Bosnia";
  gradeType:
    | "Associate Degree"
    | "Bachelor Degree"
    | "PhD"
    | "Master with Thesis"
    | "Master without Thesis";
  educationType: "Full Time" | "Online" | "Evening Period";
  campusType: "On Campus" | "Off Campus";
  educationLanguage:
    | "Turkish"
    | "English"
    | "Arabic"
    | "Russian"
    | "Spanish"
    | "French"
    | "German"
    | "Chinese"
    | "30% English 70% Turkish"
    | "50% English 50% Turkish"
    | "30% Arabic 70% Turkish"
    | "30% German 70% Turkish";
  fee: number;
  discountFee: number;
  featured: boolean;
  course: string;
}
