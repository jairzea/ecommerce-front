import { useEffect, useState } from "react";

import DataTableComponent from "../../components/commons/Datatable";

import { getOrderUser } from "../../services/api/orders/order";
import { columns } from "./Columns";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrderUser()
      .then((order) => setOrders(order))
      .catch((error) => console.error(error));
  }, []);
  return (
    <div className="container">
      <DataTableComponent title="Mis ordenes" rows={orders} columns={columns} />
    </div>
  );
};

export default MyOrders;
