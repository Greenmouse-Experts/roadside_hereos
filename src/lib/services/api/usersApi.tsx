import axios from "axios";
import * as ENDPOINT from "../constant";

const Base = ENDPOINT.BASE_URL
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('rhs_token')}`;

export const getUsers = async() => {
   return  axios.get(`${Base}${ENDPOINT.GET_USERS}`).then((response) => response.data)
} 