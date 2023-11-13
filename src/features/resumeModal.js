import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const resumeModalSlice = createSlice({
  name: "resumeModal",
  initialState,
  reducers: {
    toggleResumeModal: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { toggleResumeModal } = resumeModalSlice.actions;

export default resumeModalSlice.reducer;
