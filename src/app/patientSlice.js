import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  patientData: {
    hn: null,
    fullname: null,
    cid: null,
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
  },
});
export const getPatientAsync = (data) => async (dispatch) => {
  try {
    const response = await axios.get(
      `http://localhost:8081/api/getpatient/${data}`
    );
    if (response.data.result === "") {
    } else {
      dispatch(setPatientData(response.data));
    }
  } catch (err) {
    throw new Error(err);
  }
};
export const { setPatientData } = patientSlice.actions;

export default patientSlice.reducer;
