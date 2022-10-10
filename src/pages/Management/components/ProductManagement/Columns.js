export const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
  },
  {
    name: "Producto",
    selector: (row) => row.name,
  },
  {
    name: "Precio",
    selector: (row) => row.price,
  },
  {
    name: "Imagen",
    cell: (row) => (
      <img height="84px" width="56px" alt={row.name} src={row.img} />
    ),
    selector: (row) => row.img,
  },
];
