import { getInformationUserStorage } from "../../../utils/getInformationUserStorage";

export const mapperPayload = (productId) => {
  const { name, email, customer_mobile } = getInformationUserStorage();
  return {
    name: name,
    email: email,
    mobile: customer_mobile,
    id: productId,
  };
};
