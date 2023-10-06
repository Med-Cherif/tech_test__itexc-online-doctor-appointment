import { axiosMockApiInstance } from ".";

const patientApis = {
  getAll() {
    return axiosMockApiInstance.get("/patients").then((res) => res.data);
  },
  getOne(id: string | number) {
    return axiosMockApiInstance.get(`/patients/${id}`).then((res) => res.data);
  },
};

export default patientApis;
