import axiosInstance from "../utils/axios";

export default class AddressService {
  static getAddressOptions() {
    const route = "/form/address";
    return axiosInstance.get(route);
  }
}
