//react-redux ve react-redux-toolkit yukledık.
//!2-QUICK STARTA GECTIK VE createStore yerıne configureStore kullandık ve bunda bırcok reducer kullanabılırız combıne etmemıze gerek yok daha avantajlı.
//3-Provıder kısmı react-reduxdan app.jsde sarmallıyorsun.
//!4react-redux da typelar actionlar reducerlar ayrı bir dosya şeklinde olurken, TOOLKITTE features içinde authSlice,blogSlice oluşturup içinde Tüm statelerımızı bu SLICE ICINDE SAKLIYORUZ. import { createSlice } from "@reduxjs/toolkit" ONCE BUNU IMPORT ET ! //authSlice

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import blogReducer from "../features/blogSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session"; // session storage

const persistConfig = {
  key: "auth",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  //!STORE OLUŞTURDUK.
  reducer: {
    auth: persistedReducer, //1 store ıcınde bırden fazla reducer olabilir.
    blog: blogReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export default store;
