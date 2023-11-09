import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  showModal: false,
};

const phoneModalSlice = createSlice({
  name: "phoneModal",
  initialState,
  reducers: {
    togglePhoneModal: (state, action) => {
      console.log(action.payload);
      Object.assign(state, action.payload);
    },
  },
});

export const { togglePhoneModal } = phoneModalSlice.actions;

export default phoneModalSlice.reducer;
