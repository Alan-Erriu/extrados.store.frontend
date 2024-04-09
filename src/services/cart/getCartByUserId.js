import apiClient from "../axiosConfig/ApiClient";

export const getMyCartFetch = async () => {
  const tokenLocalStorage = localStorage.getItem("accessToken");

  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = apiClient.get("Car/getcar", { headers });
  return response;
};
