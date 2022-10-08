import { FaShoppingCart } from "react-icons/fa";
import { BsFillSuitHeartFill } from "react-icons/bs";

const ProductShowcase = () => {
  const map = [
    {
      nombre: "Un nombre",
      precio: 40000,
      id: 3,
      descripcion: "eSTA ES UNA DESCRIPCION",
    },
    {
      nombre: "Un nombre",
      precio: 40000,
      id: 3,
      descripcion: "eSTA ES UNA DESCRIPCION",
    },
    {
      nombre: "Un nombre",
      precio: 40000,
      id: 3,
      descripcion: "eSTA ES UNA DESCRIPCION",
    },
  ];
  return (
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {map?.map((data, key) => (
            <div class="col">
              <div class="card shadow-sm">
                <svg
                  class="bd-placeholder-img card-img-top"
                  width="100%"
                  height="225"
                  xmlns="http://www.w3.org/2000/svg"
                  role="img"
                  aria-label="Placeholder: صورة مصغرة"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                >
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    {data?.nombre}
                  </text>
                </svg>

                <div class="card-body">
                  <p class="card-text">{data?.descripcion}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-danger"
                      >
                        <BsFillSuitHeartFill />
                      </button>
                      <button
                        type="button"
                        class="btn btn-sm btn-outline-success"
                      >
                        <FaShoppingCart />
                      </button>
                    </div>
                    <small class="text-muted">{data?.precio}</small>
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
