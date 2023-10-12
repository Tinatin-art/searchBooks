import axios from "axios";

export const instance = axios.create({
  baseURL: "https://www.googleapis.com/",
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

instance.interceptors.request.use(
  async (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {

    return Promise.reject(error);
  }
);
