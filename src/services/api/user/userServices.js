import { LOGIN, SIGN_UP } from "../../../constants/endpoints";
import { http } from "../../http";

export const login = async (credentials) => {
  const { data = {} } = await http.post(LOGIN, credentials);
  return data;
};

export const signUpServices = async (payload) => {
  const { data = {} } = await http.post(SIGN_UP, payload);
  return data;
};
