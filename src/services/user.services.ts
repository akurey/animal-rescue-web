import axiosInstance from "../utils/axios";

export default class UserService {
  static routes = {
    login: () => `/users/login`,
    logout: () => `/users/logout`,
  };

  static loginUser(username: string, password: string) {
    return axiosInstance.post(this.routes.login(), JSON.stringify({ username, password }));
  }

  static logoutUser() {
    return axiosInstance.post(this.routes.logout());
  }
}
