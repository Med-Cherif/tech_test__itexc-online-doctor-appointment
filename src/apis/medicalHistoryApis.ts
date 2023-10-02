import axiosInstance from ".";

const medicalHistoryApis = {
  getAll() {
    return axiosInstance.get("/medical-history").then((res) => res.data);
  },
};

export default medicalHistoryApis;
