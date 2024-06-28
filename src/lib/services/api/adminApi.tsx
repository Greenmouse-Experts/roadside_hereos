// set index
import axios from "axios";
import * as ENDPOINT from "../constant";
import { getToken } from "../helpers";

// const Base = ENDPOINT.BASE_URL
axios.defaults.baseURL = ENDPOINT.BASE_URL;
axios.defaults.headers.common["Authorization"] = getToken();
axios.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      localStorage.clear();
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);

export const adminAddRates = async (payload: any) => {
  return axios
    .post(`${ENDPOINT.ADMIN_ADD_RATES}`, payload)
    .then((response) => response.data);
};

export const adminGetRates = async () => {
  return axios
    .get(`${ENDPOINT.ADMIN_GET_RATES}`)
    .then((response) => response.data);
};

export const getAdminPayments = async (params: any) => {
  return axios
    .get(
      `${ENDPOINT.ADMIN_GET_PAYMENTS}?page=${params.page}&status=${params.status}`
    )
    .then((response) => response.data);
};

export const adminGetUserDetails = async (id: string) => {
  return axios
    .get(
      `${ENDPOINT.GET_PROVIDER_DETAILS}/${id}`
    )
    .then((response) => response.data);
};
