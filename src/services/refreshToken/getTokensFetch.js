import apiClient from "../ApiClient";

export const getTokensFetch = async () => {
  try {
    const AccessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const data = {
      AccessToken,
      refreshToken,
    };
    const response = await apiClient.post("Auth/gettoken", data);

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);
  } catch (error) {
    console.log(error);
  }
};
