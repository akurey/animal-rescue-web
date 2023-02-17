import axiosInstance from "../utils/axios";

export default class RescueService {
  static addRescue(
    animalId: number,
    reporterId: number,
    formId: number,
    fieldValues: string
  ) {
    const route = "/reports";
    const body = {
      animal_id: animalId,
      reporter_id: reporterId,
      form_id: formId,
      field_values: fieldValues,
    };
    return axiosInstance.post(route, body);
  }

  static getRescue() {
    const route = "/reports";
    return axiosInstance.get(route);
  }

  static deleteRescue() {
    const route = "/reports";
    return axiosInstance.delete(route);
  }
}
