import axios from "axios";

const apiClient = axios.create({
  // URL para variable de entorno
  baseURL: "https://localhost:7072/api/",
});

export default apiClient;
