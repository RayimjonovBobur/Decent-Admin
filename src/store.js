import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Components/Redux/stored_reducer";

export const store = configureStore({
  reducer: {
    users_reducer: counterReducer,
  },
});
