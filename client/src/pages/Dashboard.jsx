import BlogCard from "../components/BlogCard";

const Dashboard = () => {
  
  const URL = import.meta.env.VITE_BASE_URL;
  const blogData = async()=>{
   const data = await axios.get(`${URL}/`);
  }
  <div>
    <BlogCard />
  </div>;
};

export default Dashboard;
