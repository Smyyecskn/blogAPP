import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { blogNewSuccess } from "../features/blogSlice";

//! BURDA KALDIM POST OLUŞTURMA


const NewBlog = () => {
  const { blogs } = useSelector((state) => state.blog);
  console.log(blogs);

  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    category: "",
    status: "",
    content: "",
  });

  const dispatch = useDispatch();

  const URL = import.meta.env.VITE_BASE_URL;

  const postNewBlog = async (newBlog) => {
    try {
      const data = await axios.post(`${URL}/blogs`, newBlog);
      dispatch(blogNewSuccess(data.data.data));
      toastSuccessNotify("Blog created successfully");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

    const getBlogCategories = async () => {
      try {
        const { data } = await axios.get(`${URL}/blog/categories`);
        dispatch(categoriesSuccess(data.data));
      } catch (error) {
        toastErrorNotify("Something went wrong");
      }
    };

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postNewBlog(newBlog);
  };

  console.log(newBlog);
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-[60%] lg:w-[30%] justify-center gap-2 mx-auto mt-10 text-sm shadow-2xl p-10 rounded-2xl"
      >
        <h2 className="text-2xl font-bold mx-auto font-serif shadow-2xl text-blue-gray-800">
          New Blog
        </h2>
        <label htmlFor="title">Title</label>
        <input
          className="border-x-2 shadow-lg p-3 rounded-lg"
          type="text"
          id="title"
          name="title"
          placeholder="*Title"
          value={newBlog.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL</label>
        <input
          className="border-x-2 shadow-lg p-3 rounded-lg"
          type="text"
          id="image"
          name="image"
          placeholder="*Image URL"
          value={newBlog.image}
          onChange={handleChange}
        />

        <label value="category">Category</label>
        <select
          className="border-x-2 shadow-lg p-3 rounded-lg"
          name="category"
          id="category"
          value={newBlog.category}
          onChange={handleChange}
        >
          {blogs?.map((blog) => (
            <option key={blog?._id} value={blog?._id}>
              {blog?.categoryId.name}
            </option>
          ))}
        </select>
        <label value="status">Status</label>

        <select
          className="border-x-2 shadow-lg p-3 rounded-lg"
          name="publish"
          id="publish"
          value={newBlog.status}
          onChange={handleChange}
        >
          <option value="">Published</option>
          <option value="">Draft</option>
        </select>
        <label>Content</label>

        <textarea
          className="border-x-2 shadow-lg p-5 rounded-lg"
          name="content"
          id="content"
          placeholder="*Content"
          value={newBlog.content}
          onChange={handleChange}
        ></textarea>
        <button className="bg-cyan-700 hover:bg-cyan-900 text-white font-medium py-2 px-2 rounded-lg mt-5">
          New Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlog;
