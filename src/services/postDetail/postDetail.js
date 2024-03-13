import apiClient from "../axiosConfig/ApiClient";

export const getPostByIdFetch = async (postId) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.get(`PostSearch/getpost/${postId}`, {
    headers,
  });
  return response.data;
};
