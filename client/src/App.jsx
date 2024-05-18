import { BrowserRouter, Route, Routes } from "react-router-dom";
import Example from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import NewBlog from "./pages/NewBlog";
import About from "./pages/About";
import MyBlogs from "./pages/MyBlogs";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login";
import PrivateRouter from "./routes/PrivateRouter";
import { ToastContainer } from "react-toastify";
import BlogDetails from "./pages/BlogDetails";
 

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
          <Route path="/blogdetails/:id" element={<PrivateRouter />}>
            <Route path="" element={<BlogDetails />} />
          </Route>
          <Route path="/newblog" element={<PrivateRouter />}>
            <Route path="" element={<NewBlog />} />
          </Route>
          <Route path="/myblogs" element={<PrivateRouter />}>
            <Route path="" element={<MyBlogs />} />
          </Route>
          <Route path="/profile" element={<PrivateRouter />}>
            <Route path="" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}
