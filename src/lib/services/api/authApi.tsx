import axios from "axios";
import { ChangePassword, CreateUser, LoginTyping, ResendTokenType, ResetPasswordType, UpdateProfile } from "../../types/auth";
import * as ENDPOINT from "../constant";

// const Base = ENDPOINT.BASE_URL
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
        localStorage.clear()
      return (window.location.href = "/auth/login");
    }
    return Promise.reject(error);
  }
);

export const adminLogin = async(payload:LoginTyping) => {
   return  axios.post(`${ENDPOINT.ADMIN_LOGIN}`, payload).then((response) => response.data)
} 

export const userLogin = async(payload:LoginTyping) => {
  return  axios.post(`${ENDPOINT.USER_LOGIN}`, payload).then((response) => response.data)
} 

export const adminUpdateAvatar = async(payload:FormData) => {
    return  axios.patch(`${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 

export const updateProfile = async(payload:UpdateProfile) => {
    return  axios.patch(`${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 

 export const adminUpdatePassword = async(payload:ChangePassword) => {
    return  axios.patch(`${ENDPOINT.UPDATE_ACCOUNT}`, payload).then((response) => response.data)
 } 

 export const registerProvider = async(payload:CreateUser) => {
  return  axios.post(`${ENDPOINT.USER_PROVIDER_SIGNUP}`, payload).then((response) => response.data)
} 

export const verifyProvider = async(payload:string) => {
  return  axios.get(`${ENDPOINT.VERIFY_EMAIL}?${payload}`).then((response) => response.data)
} 

export const resendCode = async(payload:ResendTokenType) => {
  return  axios.post(`${ENDPOINT.RESEND_TOKEN}`, payload).then((response) => response.data)
} 

export const forgetPassword = async(payload:string) => {
  return  axios.get(`${ENDPOINT.FORGOT_PASSWORD}?email=${payload}`).then((response) => response.data)
} 

export const resetPassword = async(payload:ResetPasswordType) => {
  return  axios.post(`${ENDPOINT.RESET_PASSWORD}`, payload).then((response) => response.data)
} 
