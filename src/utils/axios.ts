import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

// TODO add headers //
// let headers = {};
// if (localStorage.token) {
//   headers = { Authorization: `Bearer ${localStorage.getItem("access_token")}` };
// }

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
