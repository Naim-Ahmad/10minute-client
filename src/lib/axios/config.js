import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://10minute-server.vercel.app",
});

export default axiosInstance;
