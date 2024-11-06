import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
  blogdetail: {},
  categories: [],
  newsBlog: [],
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
    blogNewSuccess: (state, action) => {
      state.newsBlog = action.payload;
      state.loading = false;
      state.error = false;
    },
    categoriesSuccess: (state, action) => {
      state.categories = action.payload.data;
    },

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
  categoriesSuccess,
} = blogSlice.actions;

export default blogSlice.reducer;
