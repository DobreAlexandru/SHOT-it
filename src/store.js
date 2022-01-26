import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "./Features/ToggleSwitcher";

export default configureStore({
  reducer: {
    counter: toggleReducer,
  },
});
