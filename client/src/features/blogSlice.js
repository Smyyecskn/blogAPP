import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  loading: false,
  error: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    blogStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    blogSuccess: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
      state.error = false;
    },
    blogFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { blogStart, blogSuccess, blogFail } = blogSlice.actions;

export default blogSlice.reducer;
