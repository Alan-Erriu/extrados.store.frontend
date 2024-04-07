import apiClient from "../axiosConfig/ApiClient";

export const createCategoryFetch = async (formData) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };
  const data = {
    category_name: formData.BrandOrCategoryName,
    category_img: formData.BrandOrCategoryImg,
  };
  const response = await apiClient.post("Category/create", data, {
    headers,
  });
  return response;
};
