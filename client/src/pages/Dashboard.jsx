
import {  useSelector } from "react-redux";
import { useEffect, } from "react";
import { ProfileCard } from "../components/ProfileCard";
import useBlogCalls from "../services/useBlogCalls";

//!REACT-REDUX-TOOLKİT
//1-app klasoru içinde Store oluşturma.
//2-sarmalama(app.js dosyası içinde storeu provider ile uygulamaya sarmalama)
//3-gerektiği yerde storeu useSellectorle çekme ve okuma
//4-UI tarafında state değiştirmek için de dispatch yayınlayıp bunu reducera iletme


const Dashboard = () => {
   const blogs = useSelector((state) => state.blog.blogs);
  // console.log("blogs", blogs); //! başlangıc değerinden dolayı [] ama artık data.data.data bizim blogs stateımıze gomuldu. 25de
  const {getBlogs} = useBlogCalls()

 useEffect(() => {
      getBlogs();
 }, [])
 

  return (
    <div className="px-10 text-justify bg-gray-300 h-full pb-5">
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
