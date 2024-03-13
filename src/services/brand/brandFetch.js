import apiClient from "../axiosConfig/ApiClient";

export const getAllBrandsFetch = async () => {
  const brandResponse = await apiClient.get("Brand/getbrands");
  return brandResponse.data;
};
