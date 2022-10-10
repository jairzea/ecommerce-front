import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { responsePaymentGateway } from "../../services/api/payment/payment";

const PaymentGatewayResponse = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [response, setResponse] = useState();

  const reference = searchParams.get("reference");

  useEffect(() => {
    responsePaymentGateway(reference)
      .then((data) => {
        console.log(data?.response);
        setResponse({
          message: data?.response?.message,
          ref_int: data?.response?.ref_int,
        });

        if (data?.response?.status) {
          setTimeout(() => console.log(77), 3000);
        }
      })
      .catch((error) => console.error(error));
  }, [reference]);

  return (
    <div className="container">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">
              Gracias por utilizar nuestros servicios
            </h1>
            <p className="lead text-muted">
              Le informamos que su transacción se encuentra en estado:{" "}
              <b>{response?.message}</b>. Consulte el estado de sus ordenes, en
              el apartado de:-
              <b>
                <Link className="text-primary" to="/my-orders">
                  Consultar mis ordenes
                </Link>
              </b>
              .
            </p>
            <p>
              <button className="btn btn-primary m-2">
                <Link className="text-light" to="/">
                  Seguir comprando
                </Link>
              </button>
              <button className="btn btn-success m-2">
                <Link className="text-light" to="/my-orders">
                  Mis Ordenes
                </Link>
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PaymentGatewayResponse;
