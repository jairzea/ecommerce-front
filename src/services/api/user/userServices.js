import { LOGIN } from "../../../constants/endpoints";
import { http } from "../../http";

export const login = async (credentials) => {
  const { data = {} } = await http.post(LOGIN, credentials);
  return data;
};
