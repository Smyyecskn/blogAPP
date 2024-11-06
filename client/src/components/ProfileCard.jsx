/* eslint-disable react/prop-types */
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { useState } from "react";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { ArchiveBoxXMarkIcon } from "@heroicons/react/24/outline";
import useBlogCalls from "../services/useBlogCalls";

export function ProfileCard({ blog }) {
  const { deleteBlog } = useBlogCalls();

  const navigate = useNavigate();
  const [like, setLike] = useState(false);

  return (
    <Card className="w-96">
      <CardBody className="text-center">
        <p className="mb-2 font-bold">{blog?.title}</p>
        <p color="blue-gray " className="font-medium line-clamp-2">
          {blog?.content}
        </p>
      </CardBody>
      <CardHeader floated={false} className="h-80">
        <img src={blog?.image} alt="picture" className="w-full h-full" />
      </CardHeader>
      <CardFooter className="pt-2 text-center">
        <div className="flex pb-4">
          <UserCircleIcon className="size-6 text-black" />
          <p>{blog?.userId?.username || ""}</p>
        </div>
        <div className="flex gap-20 mx-auto ">
          <ChatBubbleBottomCenterIcon className="size-6 text-black" />
          <EyeIcon className="size-6 text-black" />
          <HeartIcon
            className={`size-6 ${like ? "text-red-500" : "text-black"}`}
            onClick={() => setLike(!like)}
          />
          <ArchiveBoxXMarkIcon
            className="size-6 text-black"
            onClick={() => deleteBlog(blog._id)}
          />
        </div>
        <button
          className="bg-cyan-700 hover:bg-cyan-900 text-white font-medium py-2 px-2 rounded-lg mt-7"
          onClick={() => navigate(`blogdetails/${blog?._id}`)}
        >
          Read More
        </button>
      </CardFooter>
    </Card>
  );
}
