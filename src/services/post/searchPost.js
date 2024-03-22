import apiClient from "../axiosConfig/ApiClient";

export const searchPostFetch = async (data) => {
  console.log(data);
  const response = await apiClient.post(`PostSearch/searchpost`, data);
  return response.data;
};
