import { axiosAuthInstance } from ".";
// import { TRegisterData, TLoginData } from "../types/auth"

const authApis = {
  register(data: unknown) {
    return axiosAuthInstance.post("/register", data);
  },
  login(data: unknown) {
    return axiosAuthInstance.post("/login", data);
  },
  getProfileData() {
    return axiosAuthInstance.get("/auth");
  },
  setProfileData(data: unknown) {
    return axiosAuthInstance.post("/update", data);
  },
};

export default authApis;
