import { useState } from "react";
import useAuthCalls from "../services/useAuthCalls";
// import { useSelector } from "react-redux";

const Register = () => {
  const { postRegister } = useAuthCalls();
  // const {user} = useSelector((state) => state.auth); //!register bilgilerinizi almak için kullanıyoruz.
  // console.log('user', user)

  // console.log("token", token);

  const [login, setLogin] = useState({
    username: "",
    email: "",
    password: "",
    content: "",
    image: "",
  });

  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postRegister(login);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-cyan-100 text-purple-500 flex flex-col w-[70%] lg:w-[30%] mt-20 mx-auto p-12 gap-2 shadow-2xl rounded-xl"
      >
        <h2 className="text-2xl text-center font-bold p-4">🌷 SIGN UP </h2>
        <label htmlFor="username" className="px-1">
          Username
        </label>
        <input
          className="rounded-md p-3 "
          type="text"
          name="username"
          id="username"
          placeholder="Please enter username"
          onChange={handleChange}
          value={login.username}
          required
        />
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
        <label htmlFor="content" className="px-1">
          Content
        </label>
        <input
          className="rounded-md p-3 "
          type="text"
          name="content"
          id="content"
          placeholder="Please enter content"
          onChange={handleChange}
          value={login.content}
        />
        <label htmlFor="image" className="px-1">
          Image
        </label>
        <input
          className="rounded-md p-3"
          type="text"
          name="image"
          id="image"
          placeholder="Please enter image"
          onChange={handleChange}
          value={login.image}
        />
        <button className="bg-purple-500 text-white rounded-md p-3 mt-5">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default Register;
