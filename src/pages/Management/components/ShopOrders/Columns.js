export const columns = [
  {
    name: "Id",
    selector: (row) => row.id_orden,
  },
  {
    name: "Nombre",
    selector: (row) => row.nombre,
  },
  {
    name: "Telefono",
    selector: (row) => row.telefono,
  },
  {
    name: "Email",
    selector: (row) => row.email,
  },
  {
    name: "Referencia",
    selector: (row) => row.referencia_orden,
  },
  {
    name: "Fecha de creación",
    selector: (row) => row.created_at,
  },
  {
    name: "Url de pago",
    cell: (row) => (
      <a href={row.url_pago} target="_blank" rel="noopener noreferrer">
        Url de pago
      </a>
    ),
    selector: (row) => row.url_pago,
  },
  {
    name: "Producto",
    selector: (row) => row.nombre_producto,
  },
  {
    name: "Precio",
    selector: (row) => row.precio_producto,
  },
  {
    name: "Estado",
    selector: (row) => row.estado,
  },
  {
    name: "Imagen",
    cell: (row) => (
      <img
        height="84px"
        width="56px"
        alt={row.name}
        src={row.imagen_producto}
      />
    ),
    selector: (row) => row.img,
  },
];
