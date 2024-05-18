import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  user: "",
  token: "",
};

//!5- Bu kısmı oluşturduk. 1 SLICEda  1 REDUCER OLUR.
const authSlice = createSlice({
  name: "auth", //action typeın ismi
  initialState, //initial state
  //TYPE OLUŞTURMA KENDISI action creator fonksıyonu auth/fetchStart auth/loginSuccess oluşturup 1.typeı olusturup TYPELARI OLUŞTURUR.
  reducers: {
    fetchStart: (state) => {
      //actin creator fonksiyonları herbiri
      state.loading = true;
      state.error = false;
    },
    setUser: (state, action) => {
      //bilgileri başarılı olunca saklayacak olan fonksiyon
      state.user = action.payload; //bilgiler action.payloaddan state.user a aktaracak.
      state.token = action.payload.token;
      state.loading = false;
      state.error = false;
    },

    registerSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.token = action.payload.token;
      state.error = false;
    },
    clearUser: (state) => {
      state.user = ""; // ya da "" yaparız.
      state.loading = false;
      state.token = null;
    },
    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const { fetchStart, setUser, clearUser, fetchFail, registerSuccess } =
  authSlice.actions; //createSlice ile create ettik authSlicesı, authSlice icerisindeki actionlari export ediyoruz.
export default authSlice.reducer;

//!-6 38dekini artık export default olanı store.jsxe ımport edıyoz.
