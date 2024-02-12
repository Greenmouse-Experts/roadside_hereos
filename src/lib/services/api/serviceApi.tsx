import axios from "axios";
import * as ENDPOINT from "../constant";
import {
  CreateCatType,
  PublishCatType,
  ServiceRequestType,
} from "../../types/service";


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
