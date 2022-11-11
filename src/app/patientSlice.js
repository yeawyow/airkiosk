import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  patientData: {
    hn: "00049915",
    fullname: "มาตุภูมิ ใครบุตร",
    cid: "3460100321128",
    age_y: "40",
    tell: "0965343656",
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
