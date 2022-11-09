import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;
let headers = {};

if (localStorage.token) {
  headers = { Authorization: `Bearer ${localStorage.getItem("access_token")}` };
}

const axiosInstance = axios.create({
  baseURL: "https://animal-rescue-dev.herokuapp.com",
  // baseURL: baseURL,
  headers,
});

export default axiosInstance;
