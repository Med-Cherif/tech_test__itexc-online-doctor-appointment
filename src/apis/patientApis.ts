import { axiosMockApiInstance } from ".";

const patientApis = {
  getAll() {
    return axiosMockApiInstance.get("/patients").then((res) => res.data);
  },
};

export default patientApis;
