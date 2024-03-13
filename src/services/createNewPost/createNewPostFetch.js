import apiClient from "../axiosConfig/ApiClient";

export const createNewPostFetch = async (data) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.post("Post/create", data, {
    headers,
  });

  return response;
};
