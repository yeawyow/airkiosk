import { configureStore } from "@reduxjs/toolkit";
import mqttConSlice from "./conMqttSlice";

export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
  },
});
