import axios from "axios";
import { ChangePassword, LoginTyping, UpdateProfile } from "../../types/auth";
import * as ENDPOINT from "../constant";

const Base = ENDPOINT.BASE_URL
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('rhs_token')}`;

export const adminLogin = async(payload:LoginTyping) => {
   return  axios.post(`${Base}${ENDPOINT.ADMIN_LOGIN}`, payload).then((response) => response.data)
} 

export const adminUpdateAvatar = async(payload:FormData) => {
    return  axios.patch(`${Base}${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 

export const updateProfile = async(payload:UpdateProfile) => {
    return  axios.patch(`${Base}${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 

 export const adminUpdatePassword = async(payload:ChangePassword) => {
    return  axios.patch(`${Base}${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 
