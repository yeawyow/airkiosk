import { SettingsRemote } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardId: null,
  cardStatus: null,
};
export const mqttConSlice = createSlice({
  name: "mqttcon",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    setCardId: (state, action) => {
      state.cardId = action.payload;
      // localStorage.setItem("cid", action.payload.cid);
    },
    setcardStatus: (state, action) => {
      state.cardStatus = action.payload;
    },
  },
});
export const { setCardId, setcardStatus, decrement, incrementByAmount } =
  mqttConSlice.actions;

export default mqttConSlice.reducer;
