import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import mqttConSlice from "./conMqttSlice";
import patientSlice from "./patientSlice";
import { attractionApi } from "./services/attraction";
export const store = configureStore({
  reducer: {
    mqttcon: mqttConSlice,
    patient: patientSlice,
    [attractionApi.reducerPath]: attractionApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(attractionApi.middleware),
});
setupListeners(store.dispatch);
