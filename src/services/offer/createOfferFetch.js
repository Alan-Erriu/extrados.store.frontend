import apiClient from "../axiosConfig/ApiClient";

export const createOfferFetch = async (formData) => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };
  console.log(formData);
  const offerResponse = await apiClient.post("Offer/create", formData, {
    headers,
  });
  return offerResponse.data;
};
