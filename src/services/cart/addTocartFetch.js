import apiClient from "../axiosConfig/ApiClient";

export const addToCartfetch = async (data) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.post("Car/addtocar", data, {
    headers,
  });
  return response;
};
