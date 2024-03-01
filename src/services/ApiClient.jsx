import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://localhost:7072/api/",
});

export default apiClient;
