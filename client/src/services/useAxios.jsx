import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
const URL = import.meta.env.VITE_BASE_URL;

  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: `${URL}`,
    headers: { Authorization: `Token ${token}` },
  });
  const axiosPublic = axios.create({
    baseURL: `${URL}`,
  });
  return { axiosWithToken, axiosPublic };
};

export default useAxios;
