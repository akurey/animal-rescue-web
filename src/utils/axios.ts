import axios from "axios";
import { LocalStorageKeys } from "../constants/local-storage-keys.constant";
import { LOGIN_ROUTE } from "../constants/routes.types";
import AppSessionService from "../services/storage/session.service";
import AppStorageService from "../services/storage/storage.service";

const baseURL = `${process.env.REACT_APP_BASE_URL}/api`;

const axiosInstance = axios.create({
  baseURL,
});


axiosInstance.interceptors.request.use(function (config) {
  const storageService = new AppStorageService();
  const sessionService = new AppSessionService();
  // eslint-disable-next-line
  const user = storageService.getItem(LocalStorageKeys.USER)
    ? JSON.parse(storageService.getItem(LocalStorageKeys.USER))
    : sessionService.getItem(LocalStorageKeys.USER)
      ? JSON.parse(sessionService.getItem(LocalStorageKeys.USER))
      : undefined;

  const token = user?.accessToken
  if (token) {
    config.headers.Authorization = `JWT ${token}`;
  }
  return config;

}, function (error) {
  return Promise.reject(error);
});

axiosInstance.interceptors.response.use(response => {
  return response;
}, error => {
  console.log(error, "erroror jijiji")
  if (error.response.status === 401) {
    window.location.href = LOGIN_ROUTE;
  }

  return Promise.reject(error);
});

export default axiosInstance;
