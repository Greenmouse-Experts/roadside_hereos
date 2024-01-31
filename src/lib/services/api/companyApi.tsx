import axios from "axios";
import * as ENDPOINT from "../constant";
import { SendInviteInput } from "../../types/company";

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
        localStorage.clear()
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);

export const sendInvite = async(payload:SendInviteInput) => {
   return  axios.post(`${ENDPOINT.EXTEND_INVITE}`, payload).then((response) => response.data)
} 

export const getInvite = async() => {
    return  axios.get(`${ENDPOINT.GET_COMP_INVITE}`).then((response) => response.data)
 } 

 export const getMe = async() => {
  return  axios.get(`${ENDPOINT.GET_ME}`).then((response) => response.data)
} 

 export const getDrivers = async() => {
  return  axios.get(`${ENDPOINT.GET_DRIVERS}`).then((response) => response.data)
} 

export const getDriversDetail = async(payload:string) => {
  return  axios.get(`${ENDPOINT.GET_DRIVER_DETAILS}/${payload}`).then((response) => response.data)
} 