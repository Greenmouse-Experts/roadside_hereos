import axios from "axios";
import * as ENDPOINT from "../constant";
import {
  CreateCatType,
  PublishCatType,
  ServiceRequestType,
} from "../../types/service";

// const Base = ENDPOINT.BASE_URL
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
export const createCategory = async (payload: CreateCatType) => {
  return axios
    .post(`${ENDPOINT.CREATE_CATEGORY}`, payload)
    .then((response) => response.data);
};

export const editCategory = async (payload: CreateCatType) => {
  return axios
    .patch(`${ENDPOINT.EDIT_CATEGORY}/${payload.id}`, payload)
    .then((response) => response.data);
};

export const publishCategory = async (payload: PublishCatType) => {
  return axios
    .patch(`${ENDPOINT.PUBLISH_CATEGORY}/${payload.id}`, payload)
    .then((response) => response.data);
};

export const deleteCategory = async (payload: string) => {
  return axios
    .delete(`${ENDPOINT.DELETE_CATEGORY}/${payload}`)
    .then((response) => response.data);
};

export const getCategories = async () => {
  return axios
    .get(`${ENDPOINT.GET_CATEGORY}`)
    .then((response) => response.data);
};

export const getAdminCategories = async () => {
  return axios
    .get(`${ENDPOINT.ADMIN_CATEGORY}`)
    .then((response) => response.data);
};

export const requestService = async (payload: ServiceRequestType) => {
  return axios
    .post(`${ENDPOINT.SERVICE_REQUEST}`, payload)
    .then((response) => response.data);
};

export const getAllServices = async () => {
  return axios
    .get(`${ENDPOINT.GET_SERVICES}`)
    .then((response) => response.data);
};
