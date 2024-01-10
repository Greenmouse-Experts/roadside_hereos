import axios from "axios";
import * as ENDPOINT from "../constant";
import { CreateCatType } from "../../types/service";

const Base = ENDPOINT.BASE_URL
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('rhs_token')}`;

export const createCategory = async(payload:CreateCatType) => {
   return  axios.post(`${Base}${ENDPOINT.CREATE_CATEGORY}`, payload).then((response) => response.data)
} 

export const getCategories = async() => {
    return  axios.get(`${Base}${ENDPOINT.GET_CATEGORY}`).then((response) => response.data)
 } 