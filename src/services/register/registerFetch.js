import apiClient from "../axiosConfig/ApiClient";

export const registerFetch = async (formData) => {
  const credentials = await apiClient.post("Auth/signup", formData);
  return credentials.data;
};
