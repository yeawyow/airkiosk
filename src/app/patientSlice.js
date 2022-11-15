import { createSlice } from "@reduxjs/toolkit";
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
    checkPatient: (state, action) => {},
  },
});
export const { setPatientData } = patientSlice.actions;

export default patientSlice.reducer;
