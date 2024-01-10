import axios from "axios";
import * as ENDPOINT from "../constant";

// const Base = ENDPOINT.BASE_URL
const Upload = ENDPOINT.BASE_UPLOAD
axios.defaults.headers.common['Authorization'] = `${localStorage.getItem('rhs_token')}`;

export const uploadFile = async(payload:FormData) => {
    return  axios.post(`${Upload}${ENDPOINT.UPLOAD_FILE}`, payload).then((response) => response.data)
 } 