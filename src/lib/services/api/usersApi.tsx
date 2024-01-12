import axios from "axios";
import * as ENDPOINT from "../constant";

axios.defaults.baseURL = ENDPOINT.BASE_URL;
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "rhs_token"
)}`;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 401) {
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);
export const getUsers = async () => {
  return axios
    .get(`${ENDPOINT.GET_USERS}`)
    .then((response) => response.data);
};

export const getProviders = async () => {
  return axios
    .get(`${ENDPOINT.GET_PROVIDERS}`)
    .then((response) => response.data);
};
