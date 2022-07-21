import { configureStore } from "@reduxjs/toolkit";
import { worldApi } from "./main/world.api";

export const store = configureStore({
  reducer: {
    [worldApi.reducerPath]: worldApi.reducer,
  },
});
