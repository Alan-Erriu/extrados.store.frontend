import apiClient from "../axiosConfig/ApiClient";

export const getAllPostByUserId = async () => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const userIdLocalStorage = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.get(
    `PostSearch/getallpostbyuser/${userIdLocalStorage}`,
    {
      headers,
    }
  );
  return response.data;
};
