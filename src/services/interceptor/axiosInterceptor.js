import apiClient from "../axiosConfig/ApiClient";
import { getTokensFetch } from "../refreshToken/getTokensFetch";

export const AxiosInterceptor = () => {
  apiClient.interceptors.request.use((request) => {
    console.log("comienza la request", request);
    return request;
  });
  apiClient.interceptors.response.use(
    (response) => {
      console.log("response suc", response);
      return response;
    },
    (error) => {
      if (error.response.data === "") return getTokensFetch();
      console.log("otro caso");
      return Promise.reject(error);
    }
  );
};
