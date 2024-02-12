import axios from "axios";
import * as ENDPOINT from "../constant";

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
