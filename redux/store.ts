import { configureStore } from "@reduxjs/toolkit";
import programSlices from "./slices/programSlices";

export const store = configureStore({
  reducer: {
    programs: programSlices,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
