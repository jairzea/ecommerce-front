export const LOGIN = "/auth/authentication";

export const SIGN_UP = "/auth/signup";

export const PRODUCTS = (offset = 1, limit = 6) =>
  `/products?offset=${offset}&limit=${limit}`;

export const ORDERS = "/orders";

export const SHOP_ORDERS = (offset = 1, limit = 6) => `/orders_product`;

export const GET_ORDER_USER = (email) => `orders_product_user?email=${email}`;

export const PAYMENT_REQUEST = "/payment_request";

export const PAYMENT_RESPONSE = "/response_place_to_pay";
