import apiClient from "../axiosConfig/ApiClient";

export const deleteOneFromCartFetch = async (postId) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");

  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = apiClient.delete(`Car/delete/${postId}`, { headers });
  return response;
};
