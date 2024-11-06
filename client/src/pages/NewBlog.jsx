import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../services/useBlogCalls";

const NewBlog = () => {
  const { categories } = useSelector((state) => state.blog);
  const { user } = useSelector((state) => state.auth);
  const userId = user._id;

  const { postNewBlog, getCategories } = useBlogCalls();
  const [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    categoryId: "",
    content: "",
  });

  const handleChange = (e) => {
    setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBlogs = { ...newBlog, userId };
    console.log("newBlogs", newBlogs);
    postNewBlog(newBlogs);
  };

  useEffect(() => {
    getCategories();
  }, []);

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
          value={newBlog?.title}
          onChange={handleChange}
        />
        <label htmlFor="image">Image URL</label>
        <input
          className="border-x-2 shadow-lg p-3 rounded-lg"
          type="text"
          id="image"
          name="image"
          placeholder="*Image URL"
          value={newBlog?.image}
          onChange={handleChange}
        />

        <label value="category">Category</label>
        <select
          className="border-x-2 shadow-lg p-3 rounded-lg"
          name="categoryId"
          id="categoryId"
          value={newBlog?.categoryId}
          onChange={handleChange}
        >
          {categories?.map((category) => (
            <option key={category?._id} value={category?._id}>
              {category?.name}
            </option>
          ))}
        </select>

        <label>Content</label>

        <textarea
          className="border-x-2 shadow-lg p-5 rounded-lg"
          name="content"
          id="content"
          placeholder="*Content"
          value={newBlog?.content}
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
