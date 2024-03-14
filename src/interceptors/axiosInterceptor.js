import { jwtDecode } from "jwt-decode";
import apiClient from "../services/axiosConfig/ApiClient";
import { getTokensFetch } from "../services/refreshToken/getTokensFetch";

export const AxiosInterceptor = () => {
  apiClient.interceptors.request.use(async (request) => {
    if (!request.headers.Authorization) return request;
    try {
      const tokenLocal = localStorage.getItem("accessToken");
      const decodedToken = jwtDecode(tokenLocal);
      const expirationTimeEpoch = decodedToken.exp * 1000;
      const currentTimeEpoch = new Date().getTime();

      if (expirationTimeEpoch > currentTimeEpoch) return request;
      await getTokensFetch();
      request.headers.Authorization = `Bearer ${localStorage.getItem(
        "accessToken"
      )}`;
      return request;
    } catch (error) {
      console.log(error);
      return request;
    }
  });
  apiClient.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );
};
