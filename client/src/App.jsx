import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/Navbar";
import Dashboard from "./components/pages/Dashboard";
import NewBlogs from "./components/pages/NewBlogs";
import About from "./components/pages/About";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";

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
          <Route>
            <Route path="/newblog" element={<NewBlogs />} />
            <Route path="/myblogs" element={<MyBlogs />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
