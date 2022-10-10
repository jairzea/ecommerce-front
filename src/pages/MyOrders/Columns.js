import { paymentRequest } from "../../services/api/payment/payment";
import { toastErrorAlert } from "../../utils/sweet.alert.utils";

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
    name: "¿Desea realizar?",
    cell: (row) => {
      const createPaymentRequest = () => {
        if (row?.estado === "CREATED") {
          const order = row?.id_orden;
          paymentRequest({ order })
            .then((value) => {
              toastErrorAlert(value?.message);
              window.open(value?.processUrl, "_blank");
            })
            .catch((error) =>
              toastErrorAlert(
                error?.response?.data?.message || "Ocurrio un error"
              )
            );
        } else {
          window.open(row.url_pago, "_blank");
        }
      };
      let myClass = "";
      let text = "";

      switch (row?.estado) {
        case "PENDING":
          myClass = "warning";
          text = "Retomar";
          break;

        case "APPROVED":
          myClass = "success";
          text = "Consultar";
          break;

        case "REJECTED":
          myClass = "danger";
          text = "Consultar";
          break;

        default:
          myClass = "primary";
          text = "Pagar";

          break;
      }

      return (
        <button
          onClick={() => createPaymentRequest()}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn btn-outline-${myClass} btn-sm`}
        >
          {text}
        </button>
      );
    },

    selector: (row) => row.url_pago,
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
