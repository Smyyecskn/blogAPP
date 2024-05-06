import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";

export function ProfileCard({ blog }) {
  return (
    <Card className="w-96">
      <CardHeader floated={false} className="h-80">
        <img src={blog.image} alt="picture" className="w-full h-full" />
      </CardHeader>
      <CardBody className="text-center">
        <p className="mb-2 line-clamp-2" color="blue-gray">
          {blog.content}
        </p>
        <p color="blue-gray" className="font-medium ">
          {blog.title}
        </p>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
}
