import apiClient from "../axiosConfig/ApiClient";

export const createBrandFetch = async (formData) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };
  const data = {
    brand_name: formData.BrandOrCategoryName,
    brand_img: formData.BrandOrCategoryImg,
  };
  const response = await apiClient.post("Brand/create", data, {
    headers,
  });
  return response;
};
