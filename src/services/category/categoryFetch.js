import apiClient from "../axiosConfig/ApiClient";

export const getAllCategorysFetch = async () => {
  const categoryResponse = await apiClient.get("Category/getcategorys");
  return categoryResponse.data;
};
