import { useEffect } from "react";
import Modal from "../../components/commons/Datatable/Modal/Modal";
import CreateOrderButton from "./components/CreateOrderButton";
import Customerinformation from "./components/Customerinformation";
import Orderheader from "./components/Orderheader";
import PaymentButton from "./components/PaymentButton";
import ShoppingCartBody from "./components/ShoppingCartBody";
import "./styles.css";

const SummaryOrders = ({ product, confirmed }) => {
  useEffect(() => {
    console.log(confirmed);
  }, [confirmed]);
  return (
    <>
      <Modal
        title="Resumen de orden"
        showLarge={true}
        show={product}
        footer={
          confirmed === "true" ? (
            <PaymentButton />
          ) : (
            <CreateOrderButton data={product} />
          )
        }
      >
        <Customerinformation />
        <div className="container-fluid">
          <div className="container">
            <div className="panel panel-default">
              <Orderheader />
              <ShoppingCartBody product={product} />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SummaryOrders;
