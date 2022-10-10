import { createNewOrder } from "../../../services/api/orders/order";
import {
  toastErrorAlert,
  toastSuccessAlert,
} from "../../../utils/sweet.alert.utils";

const CreateOrderButton = ({ data }) => {
  const createOrder = () => {
    createNewOrder(data?.product?.id)
      .then((data) => {
        localStorage.setItem("order", data?.order);
        toastSuccessAlert(data?.message ?? "Exito");
      })
      .catch((error) =>
        toastErrorAlert(error?.response?.data?.message ?? "Ocurrio un error")
      );
  };
  return (
    <>
      <div className="panel-heading cabeceraCheckout">
        <button
          onClick={() => createOrder()}
          className="btn btn-primary float-end btn-lg pull-right"
        >
          CREAR ORDEN
        </button>
      </div>
    </>
  );
};

export default CreateOrderButton;
