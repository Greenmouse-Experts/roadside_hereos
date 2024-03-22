import axios from "axios";
import * as ENDPOINT from "../constant";
import {
  CreateCatType,
  PublishCatType,
  ServiceRequestType,
} from "../../types/service";
import { getToken } from "../helpers";

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

export const getCompanyCategories = async () => {
  return axios
    .get(`${ENDPOINT.GET_COMPANY_SERVICES}`)
    .then((response) => response.data);
};

export const removeCompanyCategories = async (id:string) => {
  return axios
    .patch(`${ENDPOINT.REMOVE_COMPANY_SERVICE}/${id}`)
    .then((response) => response.data);
};

export const addCompanyCategories = async (payload: any) => {
  return axios
    .post(`${ENDPOINT.ADD_COMPANY_SERVICE}`, payload)
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

export const sendProfileInfo = async (payload: any) => {
  return axios
    .post(`${ENDPOINT.SEND_PROFILE_INFO}`, payload)
    .then((response) => response.data);
};

export const getServiceQoutes = async (payload:string) => {
  return axios
    .get(`${ENDPOINT.GET_SERVICE_QOUTES}/${payload}`)
    .then((response) => response.data);
};

export const selectThisQoute = async (id:string) => {
  return axios
    .post(`${ENDPOINT.SELECT_QOUTE}/${id}`)
    .then((response) => response.data);
};

export const initiatePay = async (id: string) => {
  return axios
    .post(`${ENDPOINT.INITIATE_PAYMENT}/${id}`)
    .then((response) => response.data);
};

export const confirmPay = async (payload:any) => {
  return axios
    .post(`${ENDPOINT.CONFIRM_PAYMENT}`, payload)
    .then((response) => response.data);
};

export const getAvailableService = async (payload: string) => {
  return axios
    .get(`${ENDPOINT.GET_AVAILABLE_SERVICE}/${payload}`)
    .then((response) => response.data);
};

export const selectServiceProvider = async (payload: string) => {
  return axios
    .post(`${ENDPOINT.SELECT_SERVICE_PROVIDER}/${payload}`)
    .then((response) => response.data);
};

export const getPendingServices = async () => {
  return axios
    .get(`${ENDPOINT.GET_SERVICES}`)
    .then((response) => response.data);
};

export const fetchAdminRequests = async (payload: string) => {
  return axios
    .get(`${ENDPOINT.ADMIN_GET_REQUESTS}?status=${payload}`)
    .then((response) => response.data);
};

export const getMyServices = async () => {
  return axios
    .get(`${ENDPOINT.GET_MY_SERVICES}`)
    .then((response) => response.data);
};


