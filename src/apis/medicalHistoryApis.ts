import { axiosMockApiInstance } from ".";

const medicalHistoryApis = {
  getAll() {
    return axiosMockApiInstance.get("/medical-history").then((res) => res.data);
  },
};

export default medicalHistoryApis;
