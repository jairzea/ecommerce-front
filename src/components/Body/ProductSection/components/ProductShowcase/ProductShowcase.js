import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

import { getProducts } from "../../../../../services/api/product/productService";

const ProductShowcase = ({ validateSession }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  var now = new Date();
  var miliseconds = now.getMilliseconds();

  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {products?.map((product, key) => (
            <div className="col" key={key}>
              <div className="card shadow-sm">
                <div className="card">
                  <img
                    src={product?.img}
                    className="rounded"
                    alt={product?.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product?.name}</h5>
                    <p className="card-text">{product?.description}</p>
                  </div>
                </div>

                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-danger"
                      >
                        <BsFillSuitHeartFill />
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-success"
                        onClick={() => {
                          const newProduct = {
                            miliseconds,
                            product,
                          };
                          validateSession(newProduct);
                        }}
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                    <small className="text-muted">{product?.price}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
