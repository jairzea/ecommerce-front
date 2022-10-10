import { PRODUCTS } from "../../../constants/endpoints";
import { http } from "../../http";
import { mapper } from "../../../utils/mapper";

export const getProducts = async () => {
  const { data = {} } = await http.get(PRODUCTS());
  return mapper(data?.response);
};
