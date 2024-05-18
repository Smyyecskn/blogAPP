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
  const { blogDetails } = useBlogCalls();

  useEffect(() => {
    blogDetails(id);
  }, []);

  return (
    <div>
      <Card className="w-96 m-9 ml-10 flex justify-center flex-col">
        <CardHeader className="h-80 justify-center">
          <img
            src={blogdetail?.image}
            alt="picture"
            className="w-full h-full"
          />
        </CardHeader>

        <CardBody className="text-center">
          <p className="mb-2" color="blue-gray">
            {blogdetail?.content}
          </p>
          <p color="blue-gray" className="font-medium ">
            {blogdetail?.title}
          </p>
          <button
            onClick={() => navigate(-1)}
            className="bg-cyan-700 hover:bg-cyan-900 text-white font-medium py-2 px-2 rounded-lg mt-5"
          >
            Anasayfa
          </button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogDetails;
