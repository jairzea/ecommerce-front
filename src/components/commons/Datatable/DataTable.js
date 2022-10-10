import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const DataTableComponent = ({ rows, title, columns }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProducts(rows);
    setLoading(false);
  }, [rows]);

  return (
    <DataTable
      title={title}
      columns={columns}
      data={products}
      pagination
      progressPending={loading}
    />
  );
};

export default DataTableComponent;
