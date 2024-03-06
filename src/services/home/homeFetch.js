import apiClient from "../ApiClient";

export const GetAllCategorys = async () => {
  const categoryResponse = await apiClient.get("/Category/getcategorys");
  return categoryResponse.data;
};

export const getAllPostActive = async () => {
  const postResponse = await apiClient.get("PostSearch/getall");
  return postResponse.data;
};
