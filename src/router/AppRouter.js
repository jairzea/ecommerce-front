import { useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Swal from "sweetalert2";

import Header from "../components/Header/Header";
import Home from "../pages/Home";
import Login from "../components/Login";
import ProductManagement from "../pages/Management/components/ProductManagement";
import ShopOrders from "../pages/Management/components/ShopOrders";
import Management from "../pages/Management/Management";
import MyOrders from "../pages/MyOrders";
import SummaryOrders from "../pages/SummaryOrders/SummaryOrders";
import { toastErrorAlert, toastSuccessAlert } from "../utils/sweet.alert.utils";
import { createNewOrder } from "../services/api/orders/order";
import { PrivateRouter } from "./PrivateRouter";
import PaymentGatewayResponse from "../pages/Response";
import SignUp from "../components/SingUp";

export const AppRouter = () => {
  const [showModalLogin, setShowModalLogin] = useState(false);
  const [sumaryOrder, setSumatyOrder] = useState(false);
  const [confirmed, setConfirmed] = useState("true");

  const createOrder = (data) => {
    createNewOrder(data?.product?.id)
      .then((data) => {
        localStorage.setItem("order", data?.order);
        toastSuccessAlert(data?.message ?? "Exito");
      })
      .catch((error) =>
        toastErrorAlert(error?.response?.data?.message ?? "Ocurrio un error")
      );
  };

  useEffect(() => {
    setConfirmed(confirmed);
  }, [confirmed]);

  const validateSession = (data) => {
    const session = localStorage.getItem("access_token");
    if (session) {
      Swal.fire({
        title: "Desea crear una orden automaticamente",
        showDenyButton: true,
        denyButtonText: `No, gracias`,
        allowOutsideClick: false,
        allowEscapeKey: false,
        confirmButtonText: "Si, creemosla",
      }).then((result) => {
        if (result.isConfirmed) {
          createOrder(data);
          setConfirmed("true");
        } else if (result.isDenied) {
          setConfirmed("false");
        }
      });

      setSumatyOrder(data);
    } else {
      setShowModalLogin(data);
    }
  };

  return (
    <>
      <Header />
      {showModalLogin && <Login product={showModalLogin} />}
      {sumaryOrder && (
        <SummaryOrders product={sumaryOrder} confirmed={confirmed} />
      )}
      <Routes>
        <Route path="/" element={<Home validateSession={validateSession} />} />
        <Route
          path="/my-orders"
          element={
            <PrivateRouter>
              <MyOrders />
            </PrivateRouter>
          }
        />
        <Route
          path="/shop-orders"
          element={
            <PrivateRouter>
              <ShopOrders />
            </PrivateRouter>
          }
        />
        <Route
          path="/product-management"
          element={
            <PrivateRouter>
              <ProductManagement />
            </PrivateRouter>
          }
        />
        <Route path="/login" element={<Login show={true} />} />
        <Route path="/sign-up" element={<SignUp show={true} />} />
        <Route
          path="/payment-gateway-response"
          element={<PaymentGatewayResponse />}
        />
        <Route path="/management" element={<Management />} />
      </Routes>
    </>
  );
};
