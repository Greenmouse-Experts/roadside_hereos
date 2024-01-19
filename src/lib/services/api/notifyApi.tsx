import axios from "axios";
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

export const getAdminNotify = async () => {
    return axios
      .get(`${ENDPOINT.GET_ADMIN_NOTIFY}`)
      .then((response) => response.data);
  };

  export const markAsRead = async (payload:string) => {
    return axios
      .patch(`${ENDPOINT.MARK_NOTIFY_READ}/${payload}`,)
      .then((response) => response.data);
  };