import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

// TODO add headers //
// let headers = {};
// if (localStorage.token) {
//   headers = {
//     // Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//     "Access-Control-Allow-Origin": "*",
//     "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
//     // "Access-Control-Allow-Credentials": "false",
//     // "Access-Control-Allow-Headers":
//     // "Origin, X-Requested-With, Content-Type, Accept",
//   };
// }

const axiosInstance = axios.create({
  baseURL,
  // headers,
});

export default axiosInstance;
