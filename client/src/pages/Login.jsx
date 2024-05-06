import { useState } from "react";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import axios from "axios";

const Login = () => {
  const [login, setLogin] = useState({
    //local state
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const URL = import.meta.env.VITE_BASE_URL;

  const userPost = async (login) => { //giriş işlemini yapmak için backende post isteği attık.
    try {
      const data = await axios.post(`${URL}/auth/login`, login);
      // console.log(data); //user bilgim dogru mu baktık.
      toastSuccessNotify("User loginned Successfully");
      dispatch(setUser(data.data.user));
      navigate("/");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //local statedeki verilere göre global statee veri AKTARIMI mümkün olabilir.
    //giriş bilgilerinin saklanıp global statee aktarılması gerek.
    //routıng işlemi yapılması gerek.
    userPost(login);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-cyan-100 text-purple-500 flex flex-col w-[70%] lg:w-[30%] mt-20 mx-auto p-12 gap-2 shadow-2xl rounded-xl"
      >
        <h2 className="text-2xl text-center font-bold p-4">🌸 SIGN IN </h2>
        <label htmlFor="email" className="px-1">
          Email
        </label>
        <input
          className="rounded-md p-3 "
          type="text"
          name="email"
          id="email"
          placeholder="Please enter email"
          onChange={handleChange}
          value={login.email}
          required
        />
        <label htmlFor="password" className="px-1 mt-5">
          Password
        </label>
        <input
          className="rounded-md p-3 "
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          onChange={handleChange}
          value={login.password}
          required
        />
        <button className="bg-purple-500 text-white rounded-md p-3 mt-5">
          SIGN IN
        </button>
        <p className="text-center text-sm mt-5 text-black px-3 ">
          Don't have an account?
          <NavLink className="text-pink-300" to="/register">
            Register
          </NavLink>
        </p>
      </form>
    </div>
  );
};

export default Login;
