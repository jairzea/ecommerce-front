import {
  PAYMENT_REQUEST,
  PAYMENT_RESPONSE,
} from "../../../constants/endpoints";
import { http } from "../../http";

export const paymentRequest = async (order) => {
  const { data = {} } = await http.post(PAYMENT_REQUEST, order);
  return data;
};

export const responsePaymentGateway = async (reference) => {
  const { data = {} } = await http.post(PAYMENT_RESPONSE, { reference });
  return data;
};
