import apiClient from "../axiosConfig/ApiClient";

export const addPostToOffer = async (data) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.post("OfferPost/create", data, {
    headers,
  });
  return response;
};
