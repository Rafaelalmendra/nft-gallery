import axios from "axios";

const api = axios.create({
  baseURL: "https://api.opensea.io/api/v1",
});

export default api;
