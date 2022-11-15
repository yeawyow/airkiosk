import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const initialState = {
  patientData: {
    hn: null,
    fullname: null,
    cid: null,
    age_y: null,
    tell: null,
  },
};
export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientData: (state, action) => {
      state.patientData = action.payload;
    },
    checkPatient: (state, action) => {
      // state.patientData = action.payload;
    },
  },
});
export const { setPatientData, checkPatient } = patientSlice.actions;

export default patientSlice.reducer;
