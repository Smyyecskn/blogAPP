import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import useBlogCalls from "../services/useBlogCalls";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { blogdetail } = useSelector((state) => state.blog);
  //   console.log(blogdetail);
  const { id } = useParams();
  const { blogDetails, updateBlog } = useBlogCalls();

  useEffect(() => {
    blogDetails(id);
  }, []);

  const handleEdit = () => {
    updateBlog(blogdetail._id, blog);
  };

  return (
    <div>
      <Card className="w-4/5 my-20 mx-auto flex justify-center flex-col items-center">
        <CardHeader className="h-80 justify-center">
          <img
            src={blogdetail?.image}
            alt="picture"
            className="w-full h-full"
          />
        </CardHeader>

        <CardBody className="text-center">
          <p color="blue-gray" className="font-bold">
            🌸{blogdetail?.title} 🌸
          </p>
          <p className="my-2" color="blue-gray">
            {blogdetail?.content}
          </p>

          <p className="my-2" color="blue-gray">
            {blogdetail?.userId?.username}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="bg-cyan-300 hover:bg-orange-200 text-orange-100 font-medium py-2 px-3 rounded-lg mt-5 mx-6"
          >
            Home Page
          </button>
          <button
            className="text-cyan-700 bg-orange-100 hover:bg-cyan-300 font-medium py-2 px-4 rounded-lg mt-5"
            onClick={() => handleEdit(blogdetail)}
          >
            Edit Blogs
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogDetails;
