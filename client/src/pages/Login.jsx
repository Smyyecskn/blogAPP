import { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuthCalls from "../services/useAuthCalls";

const Login = () => {
  const { postUser } = useAuthCalls();
  const [login, setLogin] = useState({
    //local state
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //local statedeki verilere göre global statee veri AKTARIMI mümkün olabilir.
    //giriş bilgilerinin saklanıp global statee aktarılması gerek.
    //routıng işlemi yapılması gerek.
    postUser(login);
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
        <div className="flex items-center justify-between m-4">
          <p className="text-black ">Don't have an account?</p>
          <NavLink className="text-pink-300" to="/register">
            Register
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
