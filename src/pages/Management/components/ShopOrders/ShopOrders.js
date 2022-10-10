import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import DataTableComponent from "../../../../components/commons/Datatable/DataTable";

import { getShopOrders } from "../../../../services/api/orders/order";
import { columns } from "./Columns";

const ShopOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getShopOrders()
      .then((order) => setOrders(order))
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
            Ordenes de la tienda
          </li>
        </ol>
      </nav>
      <DataTableComponent
        title="Ordenes de la tienda"
        rows={orders}
        columns={columns}
      />
    </div>
  );
};

export default ShopOrders;
