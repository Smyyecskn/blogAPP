import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  user: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = false;
    },
    logoutSuccess: (state) => {
      state.user = "";
      state.loading = false;
      state.error = false;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, loginSuccess, logoutSuccess, fetchFail } =
  authSlice.actions;
export default authSlice.reducer;
