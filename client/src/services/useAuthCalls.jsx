import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import { fetchFail, registerSuccess, setUser } from "../features/authSlice";
import useAxios from "./useAxios";

const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { axiosPublic, axiosWithToken } = useAxios();

  const postUser = async (login) => {
    //giriş işlemini yapmak için backende post isteği attık.
    try {
      const data = await axiosPublic.post(`/auth/login`, login);
      // console.log(data); //user bilgim dogru mu baktık.
      toastSuccessNotify("Login işlemi Başarılı");
      dispatch(setUser(data.data.user));
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login işlemi Başarısız");
    }
  };

  //register olma koşulları sağlanarak anasayfaya yönlendirildi
  const postRegister = async (postUser) => {
    try {
      const { data } = await axiosWithToken.post(`/user`, postUser);
      console.log("data", data);
      toastSuccessNotify("User created successfully");
      dispatch(registerSuccess(data.data));
      navigate("/");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Something went wrong");
    }
  };
  //   const handleLogout = async () => {
  //     try {
  //       const data = await axiosWithToken.get(`/auth/logout`);
  //       console.log("data", data);
  //       dispatch(clearUser());
  //       navigate("/login");
  //       toastSuccessNotify("Logout successfully");
  //     } catch (error) {
  //       dispatch(fetchFail());
  //       toastErrorNotify("Something went wrong");
  //     }
  //   };
  return { postUser, postRegister };
};

export default useAuthCalls;
