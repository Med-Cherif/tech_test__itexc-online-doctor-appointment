import { TAppointmentStatus } from "./../types/appointment.d";
import { axiosAuthInstance } from ".";

const appointmentApis = {
  getAll() {
    return axiosAuthInstance.get("/appointment").then((res) => res.data);
  },
  updateStatus(id: string, status: TAppointmentStatus) {
    return axiosAuthInstance.post(`/appointment/${id}`, { status });
  },
};

export default appointmentApis;
