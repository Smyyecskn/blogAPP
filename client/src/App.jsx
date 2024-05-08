import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewBlogs from "./pages/NewBlogs";
import About from "./pages/About";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRouter from "./routes/PrivateRouter";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Example />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/newblog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlogs />} />
          </Route>

          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
