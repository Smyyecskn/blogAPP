import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const username = ""; //user?.email && user?.password
  return username ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
