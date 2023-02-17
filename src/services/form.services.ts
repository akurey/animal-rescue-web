import axiosInstance from "../utils/axios";

export default class FormService {
  static getFormFields(formId: any) {
    const route = `/form/${formId}/fields`;
    return axiosInstance.get(route);
  }

  static getAnimalInfo() {
    const route = `/animals`;
    return axiosInstance.get(route);
  }
}
