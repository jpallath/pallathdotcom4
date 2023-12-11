import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  description: "",
  image: "",
  link: "",
};

const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    updateLike: (state, action) => {
      Object.assign(state, action.payload);
    },
  },
});

export const { updateLike } = likesSlice.actions;

export default likesSlice.reducer;
