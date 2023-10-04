import axios from "axios";
import tokenStorageKey from "../constants/tokenStorageKey";

const axiosMockApiInstance = axios.create({
  baseURL: "https://651b3b6b194f77f2a5ae5b6b.mockapi.io/api",
});

const axiosAuthInstance = axios.create({
  baseURL: import.meta.env.VITE_AUTH_API,
});

axiosAuthInstance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${localStorage.getItem(
        tokenStorageKey
      )}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response?.status === 401) {
      localStorage.removeItem(tokenStorageKey);
      window.location.pathname = "/login";
    }
    return Promise.reject(error);
  }
);

export { axiosMockApiInstance, axiosAuthInstance };
