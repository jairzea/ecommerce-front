import {
  SHOP_ORDERS,
  ORDERS,
  GET_ORDER_USER,
} from "../../../constants/endpoints";
import { getInformationUserStorage } from "../../../utils/getInformationUserStorage";
import { mapper } from "../../../utils/mapper";
import { http } from "../../http";
import { mapperPayload } from "./mapperOrders";

export const createNewOrder = async (productId) => {
  const { data = {} } = await http.post(ORDERS, mapperPayload(productId));
  return data;
};

export const getShopOrders = async () => {
  const { data = {} } = await http.get(SHOP_ORDERS());
  return mapper(data?.response);
};

export const getOrderUser = async () => {
  const { email } = getInformationUserStorage();
  const { data = {} } = await http.get(GET_ORDER_USER(email));
  return mapper(data?.response);
};
