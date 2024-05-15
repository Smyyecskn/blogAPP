import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blogdetail: {},
  newBlog: [],
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
    blogNewSuccess: (state, action) => {
      state.newBlog = action.payload;
      state.loading = false;
      state.error = false;
    },
    blogDetailSuccess: (state, action) => {
      state.blogdetail = action.payload;
      state.loading = false;
      state.error = false;
    },
    blogFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  blogStart,
  blogSuccess,
  blogFail,
  blogDetailSuccess,
  blogNewSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
