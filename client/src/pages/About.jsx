import { Card } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const About = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Card className="w-[70%] text-center mx-auto p-20 gap-8">
        <h2 className="font-bold bg-purple-600 mx-auto text-white p-2 w-[60%] lg:w-[20%] rounded-lg">
          {user?.username && user?.firstname}
        </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At quos
          recusandae aliquid quae, id velit aspernatur eum. Repellendus ipsa
          doloribus ratione dolor a voluptates nam corrupti officiis totam
          perferendis blanditiis aliquam, rem est excepturi itaque ex soluta
          quae voluptatem voluptatibus. Nisi ducimus tempora nihil, sint
          officiis omnis officia magnam architecto! Ut vero laudantium ea
          exercitationem quod perferendis, eaque fugit inventore totam dicta
          odio omnis, voluptas tenetur ipsa optio quibusdam impedit eligendi
          dolor nisi unde sapiente sequi accusamus incidunt! Vitae veritatis
          corporis animi dolorum voluptatum alias, quibusdam fuga eum rerum,
          quia asperiores quis minus autem ex! Nulla veritatis eveniet soluta
          cum?
        </p>
      </Card>
    </div>
  );
};

export default About;
