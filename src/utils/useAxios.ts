/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import type { AxiosInstance, AxiosRequestConfig } from "axios";
import axios from "axios";

interface AxiosOptions extends AxiosRequestConfig {
  // additional options here
  customOption: string;
}

interface CustomAxiosInstance extends AxiosInstance {
  (config: AxiosOptions): Promise<any>;
}

const axiosInstance: CustomAxiosInstance = axios.create({
  // base options here
  baseURL: "https://valentia-bot.azurewebsites.net/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  },
  withCredentials: true,
  // additional options here
});

// axiosInstance.defaults.adapter = require("axios/lib/adapters/http");

// axiosInstance.interceptors.request.use(
//   (x) => {
//     x.headers.Authorization = ``;
//     return x;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
