import axios from "axios";

const apiSWAPI = axios.create({
  baseURL: "https://swapi.dev/api",
});

export default apiSWAPI;
