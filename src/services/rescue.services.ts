import axiosInstance from "../utils/axios";

export default class RescueService {
  static routes = {
    reports: () => `/reports`,
    report: (id: string) => `/reports/${id}`,
  };

  static addRescue(
    animalId: number,
    reporterId: number,
    formId: number,
    fieldValues: string
  ) {
    const body = {
      animal_id: animalId,
      reporter_id: reporterId,
      form_id: formId,
      field_values: fieldValues,
    };
    return axiosInstance.post(this.routes.reports(), body);
  }

  static getRescue() {
    return axiosInstance.get(this.routes.reports());
  }

  static deleteRescue() {
    return axiosInstance.delete(this.routes.reports());
  }

  static updateRescue(rescueId: string, fieldValues: string, animalId: string) {
    const body = {
      animal_id: animalId,
      field_values: fieldValues,
    };

    return axiosInstance.patch(this.routes.report(rescueId), body);
  }
}
