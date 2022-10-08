import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Management from "../pages/Management";
import MyOrders from "../pages/MyOrders";

export const AppRouter = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/my-orders" element={<MyOrders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
