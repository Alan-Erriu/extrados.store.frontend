import apiClient from "../ApiClient";

export const registerFetch = async (formData) => {
  try {
    const credentials = await apiClient.post("Auth/signup", formData);
    console.log(credentials);
    alert("exito");
  } catch (error) {
    alert("algo salio mal");
    console.log(formData);
    console.log("Error", error);
  }
};
