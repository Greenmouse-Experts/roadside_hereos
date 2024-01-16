import axios from "axios";
import * as ENDPOINT from "../constant";
import { CreateCatType } from "../../types/service";

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
export const createCategory = async(payload:CreateCatType) => {
   return  axios.post(`${ENDPOINT.CREATE_CATEGORY}`, payload).then((response) => response.data)
} 

export const editCategory = async(payload:CreateCatType) => {
  return  axios.patch(`${ENDPOINT.EDIT_CATEGORY}/${payload.id}`, payload).then((response) => response.data)
} 

export const getCategories = async() => {
    return  axios.get(`${ENDPOINT.GET_CATEGORY}`).then((response) => response.data)
 } 