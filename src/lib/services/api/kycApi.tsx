import axios from "axios";
import * as ENDPOINT from "../constant";
import { kycProps } from "../../store/kycStore";

export const submitKyc = async (payload: kycProps) => {
  return axios
    .post(`${ENDPOINT.SUBMIT_KYC}`, payload)
    .then((response) => response.data);
};

export const getKyc = async () => {
  return axios.get(`${ENDPOINT.GET_KYC}`).then((response) => response.data);
};
