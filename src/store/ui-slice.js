import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    emptyAlert: false,
  },
  reducers: {
    showEmptyAlert(state) {
      state.emptyAlert = true;
    },
    closeEmptyAlert(state) {
      state.emptyAlert = false;
    },
  },
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice.reducer;
