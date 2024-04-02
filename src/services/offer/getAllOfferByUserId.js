import apiClient from "../axiosConfig/ApiClient";

export const getAllOfferByUserId = async () => {
  const tokenLocalStorage = localStorage.getItem("accessToken");
  const userIdLocalStorage = localStorage.getItem("userId");
  const headers = {
    Authorization: `Bearer ${tokenLocalStorage}`,
  };

  const response = await apiClient.get(
    `Offer/getallActiveByUserId/${userIdLocalStorage}`,
    {
      headers,
    }
  );
  return response.data;
};
