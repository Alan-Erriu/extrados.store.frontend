import apiClient from "../axiosConfig/ApiClient";

export const loginFetch = async (formData) => {
  const credentials = await apiClient.post("auth/signin", formData);
  return credentials;
};
