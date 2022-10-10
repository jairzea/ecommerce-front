import { AiOutlineClose } from "react-icons/ai";

const ShoppingCartBody = ({ product }) => {
  product = product?.product;
  return (
    <>
      <div className="panel-body cuerpoOrden">
        <div className="row itemResumen">
          <div className="col-1">
            <br />

            <center>
              <button className="btn btn-success backColor btnLimpiarCarrito">
                <AiOutlineClose />
              </button>
            </center>
          </div>

          <div className="col-1 mt-4">
            <figure className="imgResumenOrden">
              <img
                src={product?.img}
                alt="bjh"
                width={100}
                className="img-thumbnail"
              />
            </figure>
          </div>

          <div className="col-4">
            <br />

            <p className="tituloResumenOrden text-left">{product?.name}</p>
            <p className="descripcionResumenOrden text-left">
              {product?.description}
            </p>
          </div>

          <div className="col">
            <br />

            <p className="precioResumen text-center">
              COP $<span>{product?.price}</span>
            </p>
          </div>

          <div className="col">
            <br />

            <div className="col-xs-8">
              <center>
                <input
                  type="number"
                  className="form-control text-center"
                  min="1"
                  max="1"
                  value="1"
                  readOnly
                />
              </center>
            </div>
          </div>

          <div className="col-md-2 col-sm-1 col-xs-4 text-center">
            <br />

            <p>
              <strong>
                COP $<span className="precioResumen">{product?.price}</span>
              </strong>
            </p>
          </div>
        </div>

        <hr />

        <div className="panel-heading sumaOrden float-end row p-4 text-center">
          <div className="col mt-3">
            <h4>TOTAL:</h4>
          </div>

          <div className="col">
            <strong>
              <h4>
                COP $<span className="precioResumen">{product?.price}</span>
              </h4>
            </strong>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCartBody;
