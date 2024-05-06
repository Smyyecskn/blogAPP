//!REACT-REDUX-TOOLKİT
//1-app klasoru içinde Store oluşturma.
//2-sarmalama(app.js dosyası içinde storeu provider ile uygulamaya sarmalama)
//3-gerektiği yerde storeu useSellectorle çekme ve okuma
//4-UI tarafında state değiştirmek için de dispatch yayınlayıp bunu reducera iletme

import { useDispatch, useSelector } from "react-redux";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useEffect } from "react";
import axios from "axios";
import { blogSuccess } from "../features/blogSlice";
 import { ProfileCard } from "../components/ProfileCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const URL = import.meta.env.VITE_BASE_URL;
  const blogs = useSelector((state) => state.blog.blogs);
  console.log("blogs", blogs); //[] başlangıc değerinden dolayı artık data.data.data bizim blogs stateımıze gomuldu.

  const getBlogs = async () => {
    try {
      const data = await axios.get(`${URL}/blogs`);
      console.log(data.data.data);
      toastSuccessNotify("Blogs getted");
      dispatch(blogSuccess(data.data.data)); ///artık bu blogs statıne aktarıldı 16dakı.
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="px-10 text-justify bg-pink-100 h-full pb-5  ">
      <h1 className="font-bold text-2xl lg:text-4xl py-3">Blogs</h1>
      <div className="flex flex-wrap gap-3 justify-center mt-3">
        {blogs?.map((blog) => {
          return <ProfileCard key={blog._id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default Dashboard;
