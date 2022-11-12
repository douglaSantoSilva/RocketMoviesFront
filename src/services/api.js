import axios from "axios";

export const api = axios.create({
  baseURL: "https://rocketmoviess-api.herokuapp.com"
})