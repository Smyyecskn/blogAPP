import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
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
      </form>
    </div>
  );
};

export default Login;
