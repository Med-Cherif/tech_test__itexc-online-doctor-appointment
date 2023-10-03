import axios from "axios";

const axiosMockApiInstance = axios.create({
  baseURL: "https://651b3b6b194f77f2a5ae5b6b.mockapi.io/api",
});

export { axiosMockApiInstance };
