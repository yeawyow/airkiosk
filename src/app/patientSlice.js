import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  patientData: {
    hn: "00049915",
    fullname: "มาตุภูมิ ใครบุตร",
  },
};
export const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setPatientData: (state, action) => {
      state.patientData = action.payload;

      // localStorage.setItem("cid", action.payload.cid);
    },
  },
});
export const { setPatientData } = patientSlice.actions;

export default patientSlice.reducer;
