import axios from "axios";
import * as ENDPOINT from "../constant";
import { SendInviteInput } from "../../types/company";



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