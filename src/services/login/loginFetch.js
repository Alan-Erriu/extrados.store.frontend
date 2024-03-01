import apiClient from "../ApiClient";

export const loginFetch = async (formData) => {
  try {
    const credentials = await apiClient.post("auth/signin", formData);
    console.log(credentials);
  } catch (error) {
    console.log("Error", error.message);
  }
};
