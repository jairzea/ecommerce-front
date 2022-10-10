import { paymentRequest } from "../../../services/api/payment/payment";
import {
  toastErrorAlert,
  toastSuccessAlert,
} from "../../../utils/sweet.alert.utils";

const PaymentButton = () => {
  const createPaymentRequest = () => {
    const order = localStorage.getItem("order");
    paymentRequest({ order })
      .then((value) => {
        toastSuccessAlert(value?.message);
        window.open(value?.processUrl, "_blank");
      })
      .catch((error) =>
        toastErrorAlert(error?.response?.data?.message || "Ocurrio un error")
      );
  };

  return (
    <>
      <div className="panel-heading cabeceraCheckout">
        <button
          onClick={() => createPaymentRequest()}
          className="btn btn-success float-end backColor btn-lg pull-right btnRealizarPago"
        >
          REALIZAR PAGO
        </button>
      </div>
    </>
  );
};

export default PaymentButton;
