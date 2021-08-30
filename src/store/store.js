import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todos-slice";
import uiSlice from "./ui-slice";

const store = configureStore({
  reducer: { todos: todoSlice, ui: uiSlice },
});

export default store;
