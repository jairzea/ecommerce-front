import { Link } from "react-router-dom";

const Management = () => {
  return (
    <div className="container">
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Sección de Administración</h1>
            <p className="lead text-muted">
              En esta sección puede administrar los productos y ordenes de
              clientes generadas en la tienda.
            </p>
            <b className="lead">
              Se requiere autenticación, de lo contrario seras redireccionado a
              la pagina de inicio.
            </b>
            <p>
              <button className="btn btn-primary m-2">
                <Link className="text-light" to="/product-management">
                  Administrar Productos
                </Link>
              </button>
              <button className="btn btn-secondary m-2">
                <Link className="text-light" to="/shop-orders">
                  Ordenes de la Tienda
                </Link>
              </button>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Management;
