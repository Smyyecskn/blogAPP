import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import { blogDetailSuccess } from "../features/blogSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const BlogDetails = () => {
  const URL = import.meta.env.VITE_BASE_URL;
  const { blogdetail } = useSelector((state) => state.blog);
  //   console.log(blogdetail);
  const { id } = useParams();
  const dispatch = useDispatch();

  const blogDetails = async (id) => {
    try {
      const data = await axios.get(`${URL}/blogs/${id}`);
      //   console.log(data.data.data);
      dispatch(blogDetailSuccess(data.data.data));
      toastSuccessNotify("Blog getted");
    } catch (error) {
      toastErrorNotify("Something went wrong");
    }
  };

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
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogDetails;
