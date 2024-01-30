import axios from "axios";
import * as ENDPOINT from "../constant";

const getToken = () => {return `${localStorage.getItem(
  "rhs_token"
)}`}
axios.defaults.baseURL = ENDPOINT.BASE_URL;
axios.defaults.headers.common["Authorization"] = getToken();
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 402) {
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
