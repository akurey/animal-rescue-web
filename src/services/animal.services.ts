import axiosInstance from "../utils/axios";

export default class AnimalService {
  static getAnimalList() {
    const route = "/animals";
    return axiosInstance.get(route);
  }
}
