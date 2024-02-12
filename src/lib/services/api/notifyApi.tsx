import axios from "axios";
import * as ENDPOINT from "../constant";


export const getAdminNotify = async () => {
    return axios
      .get(`${ENDPOINT.GET_ADMIN_NOTIFY}`)
      .then((response) => response.data);
  };

  export const getUserNotify = async (payload:string) => {
    return axios
      .get(`${ENDPOINT.GET_USER_NOTIFY}/${payload}`)
      .then((response) => response.data);
  };

  export const markAsRead = async (payload:string) => {
    return axios
      .patch(`${ENDPOINT.MARK_NOTIFY_READ}/${payload}`,)
      .then((response) => response.data);
  };