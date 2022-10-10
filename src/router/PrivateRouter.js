import { Navigate } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const access_token = localStorage.getItem("access_token");

  return access_token ? children : <Navigate to="/" />;
};
