import apiClient from "../ApiClient";

export const getAllPostActiveFetch = async () => {
  const postResponse = await apiClient.get("PostSearch/getall");
  return postResponse.data;
};
