import {
  blogDetailSuccess,
  blogNewSuccess,
  blogSuccess,
  categoriesSuccess,
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
      const data = await axiosWithToken(`/blogs`);
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
  const postNewBlog = async (newBlogs) => {
    try {
      const { data } = await axiosPublic.post(`/blogs`, newBlogs);
      dispatch(blogNewSuccess(data));
      toastSuccessNotify("Blog created successfully");
      navigate("/");
      getBlogs();
    } catch (error) {
      toastErrorNotify("Something went wrong");
      console.log("Error:", error.response?.data || error.message);
    }
  };

  const getCategories = async () => {
    try {
      const { data } = await axiosPublic(`/categories`);
      // console.log(data.data);
      dispatch(categoriesSuccess(data));
    } catch (error) {
      console.log("Error:", error.response?.data || error.message);
    }
  };

  const deleteBlog = async (_id) => {
    try {
      await axiosWithToken.delete(`/blogs/${_id}`);
      toastSuccessNotify("Blog deleted successfully");
      getBlogs();
    } catch (error) {
      toastErrorNotify("Something went wrong");
      console.log(error);
    }
  };

  const updateBlog = async (id, updatedBlog) => {
    try {
      await axiosWithToken.put(`/blogs/${id}`, updatedBlog);
      toastSuccessNotify("Blog updated successfully");
      getBlogs();
    } catch (error) {
      toastErrorNotify("Something went wrong");
      console.log(error.message);
    }
  };

  return {
    getBlogs,
    blogDetails,
    postNewBlog,
    getCategories,
    deleteBlog,
    updateBlog,
  };
};

export default useBlogCalls;
