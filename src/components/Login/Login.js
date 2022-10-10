import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../services/api/user/userServices";
import Modal from "../commons/Datatable/Modal/Modal";
import {
  toastErrorAlert,
  toastSuccessAlert,
} from "../../utils/sweet.alert.utils";
import "./styles.css";

const Login = ({ product }) => {
  const [sumaryOrder, setSumatyOrder] = useState(false);

  const handleActionSubmit = async () => {
    const credentials = {
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    };
    login(credentials)
      .then((value) => {
        const userData = {
          user: value?.user,
          expires_at: value?.expires_at,
        };
        localStorage.setItem("access_token", value?.access_token);
        localStorage.setItem("user_data", JSON.stringify(userData));
        localStorage.setItem("token_type", value?.token_type);
        toastSuccessAlert("Exito");
        setSumatyOrder(value);
        setTimeout(() => {
          window.location.replace("");
        }, 700);
      })
      .catch((error) =>
        toastErrorAlert(error?.response?.data?.message ?? "Ocurrio un error")
      );
  };

  return (
    <div>
      {!sumaryOrder && (
        <Modal title="Inicio de sesión" show={product}>
          <p className="lead text-muted text-center">
            Por favor inicie sesión para poder genera una orden en la tienda.
          </p>
          <form>
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInput">Correo</label>
            </div>
            <div className="form-floating mb-4">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPassword">Contraseña</label>
            </div>

            <button
              className="w-100 btn btn-lg btn-primary"
              type="button"
              onClick={() => {
                handleActionSubmit();
              }}
            >
              Iniciar sesión
            </button>
            <Link>
              <p className="mt-5 mb-3 float-end">Registrarse</p>
            </Link>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default Login;
