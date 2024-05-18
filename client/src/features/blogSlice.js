import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blogdetail: {},
  // newBlog: {},
  loading: false,
  error: false,
  token: "",
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
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
    },
    // blogNewSuccess: (state, action) => {
    //   state.newBlog = action.payload.data;
    //   state.token = action.payload.token;
    // },
    blogDetailSuccess: (state, action) => {
      state.blogdetail = action.payload;
      state.token = action.payload.token;
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
