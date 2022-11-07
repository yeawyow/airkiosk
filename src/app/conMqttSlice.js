import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cardId: null,
};
export const mqttConSlice = createSlice({
  name: "mqttcon",
  initialState,
  reducers: {
    setCardId: (state, action) => {
      state.cardId = action.payload;

      // localStorage.setItem("cid", action.payload.cid);
    },
  },
});
export const { setCardId } = mqttConSlice.actions;

export default mqttConSlice.reducer;
