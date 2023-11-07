import { ProgramType } from "../../utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AllProgramsData } from "@/utils/data";

// Define the initial authentication state
interface AuthState {
  AllPrograms: ProgramType[];
  currentProgramsData: ProgramType[];
  sortCriteria: "rank" | "-disocunted_price" | "discounted_price";
  orderAndPerPagePath:
    | "limit=10&ordering=-can_apply,rank"
    | "limit=10&ordering=-can_apply,-disocunted_price"
    | "limit=10&ordering=-can_apply,discounted_price";
  searchedPrograms: ProgramType[];
  isSearchActive: boolean;
  filterQuery: {
    q: string;
    country: { id: number; name: string }[];
    campus_type: { id: number; name: string }[];
    grade_type: { id: number; name: string }[];
    education_type: { id: number; name: string }[];
    provider_type: { id: number; name: string }[];
    education_language: { id: number; name: string }[];
  };
  isLoading: boolean;
  currentProgramDisplayedLength: number;
}

const initialAuthState: AuthState = {
  isLoading: false,
  AllPrograms: AllProgramsData || [],
  currentProgramsData: [],
  sortCriteria: "rank",
  orderAndPerPagePath: "limit=10&ordering=-can_apply,rank",
  searchedPrograms: [],
  isSearchActive: false,
  filterQuery: {
    q: "",
    country: [],
    campus_type: [],
    grade_type: [],
    education_type: [],
    provider_type: [],
    education_language: [],
  },
  currentProgramDisplayedLength: 0,
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setCurrentProgramDisplayedLength: (
      state,
      action: PayloadAction<number>
    ) => {
      state.currentProgramDisplayedLength = action.payload;
    },
    setCurrentProgramsData: (state, action: PayloadAction<ProgramType[]>) => {
      state.currentProgramsData = action.payload;
    },
    setSearchedPrograms: (state, action: PayloadAction<ProgramType[]>) => {
      state.searchedPrograms = action.payload;
    },
    setIsSearchActive: (state, action: PayloadAction<boolean>) => {
      console.log(action.payload);
      state.isSearchActive = action.payload;
    },
    setSortCriteria: (
      state,
      action: PayloadAction<"rank" | "-disocunted_price" | "discounted_price">
    ) => {
      state.sortCriteria = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setFilterQuery: (
      state,
      action: PayloadAction<{
        country: { id: number; name: string }[];
        campus_type: { id: number; name: string }[];
        grade_type: { id: number; name: string }[];
        education_type: { id: number; name: string }[];
        provider_type: { id: number; name: string }[];
        education_language: { id: number; name: string }[];
        q: string;
      }>
    ) => {
      console.log(action.payload);
      state.filterQuery = action.payload;
    },
    setOrderAndPerPagePath: (
      state,
      action: PayloadAction<
        | "limit=10&ordering=-can_apply,rank"
        | "limit=10&ordering=-can_apply,-disocunted_price"
        | "limit=10&ordering=-can_apply,discounted_price"
      >
    ) => {
      state.orderAndPerPagePath = action.payload;
    },
  },
});
export const {
  setCurrentProgramsData,
  setSortCriteria,
  setOrderAndPerPagePath,
  setSearchedPrograms,
  setIsSearchActive,
  setFilterQuery,
  setIsLoading,
  setCurrentProgramDisplayedLength,
} = authSlice.actions;
export default authSlice.reducer;
