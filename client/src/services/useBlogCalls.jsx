import {
  blogDetailSuccess,
  blogNewSuccess,
  blogSuccess,
} from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { useNavigate } from "react-router-dom";

const useBlogCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken, axiosPublic } = useAxios();
  const navigate = useNavigate();

  const getBlogs = async () => {
    try {
      const data = await axiosWithToken.get(`/blogs`);
      // console.log(data.data.data);
      toastSuccessNotify("Blogs getted");
      dispatch(blogSuccess(data.data.data)); ///artık bu blogs statıne aktarıldı 16dakı.
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  const blogDetails = async (id) => {
    try {
      const data = await axiosWithToken(`/blogs/${id}`);
      //   console.log(data.data.data);
      dispatch(blogDetailSuccess(data.data.data));
      toastSuccessNotify("Blog getted");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };
  const postNewBlog = async (news) => {
    try {
      const data = await axiosPublic.post(`/blogs`, news);
      console.log(data);
      // dispatch(blogNewSuccess(data.data.data));
      toastSuccessNotify("Blog created successfully");
      getBlogs();
      navigate("/");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

  return { getBlogs, blogDetails, postNewBlog };
};

export default useBlogCalls;
