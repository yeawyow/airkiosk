import { configureStore } from "@reduxjs/toolkit";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";

export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    patient: patientSlice,
  },
});
