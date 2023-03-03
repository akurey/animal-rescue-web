import axiosInstance from "../utils/axios";

export default class UserService {
  static loginUser(username: string, password: string) {
    const route = "/users/login";
    return axiosInstance.post(route, JSON.stringify({ username, password }));
  }
}
