import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import DataTableComponent from "../../../../components/commons/Datatable/DataTable";

import { getProducts } from "../../../../services/api/product/productService";
import { columns } from "./Columns";

const ProductManagement = ({ handleState }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/management">Administración</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Administración de prouctos
          </li>
        </ol>
      </nav>
      <DataTableComponent title="Productos" rows={products} columns={columns} />
    </div>
  );
};

export default ProductManagement;
