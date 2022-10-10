import axios from "axios";

const token =
  (localStorage.getItem("token_type") || "") +
  " " +
  (localStorage.getItem("access_token") || "");

const domain = window.location.origin;

export const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: false, // This is the default
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

http.interceptors.request.use(
  async function (config) {
    config.headers["Authorization"] = token;
    config.headers["Origin"] = domain;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
