import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";
import { apiSlice } from "../app/apiSlice";
export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    patient: patientSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
setupListeners(store.dispatch);
