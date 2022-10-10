import { Link } from "react-router-dom";
import { signUpServices } from "../../services/api/user/userServices";
import {
  toastErrorAlert,
  toastSuccessAlert,
} from "../../utils/sweet.alert.utils";
import "./styles.css";

const SignUp = ({ product }) => {
  const handleActionSubmit = async () => {
    const credentials = {
      email: document.getElementById("email").value,
      name: document.getElementById("name").value,
      mobile: document.getElementById("mobile").value,
      password: document.getElementById("password").value,
    };
    signUpServices(credentials)
      .then((value) => {
        toastSuccessAlert("Exito");
        setTimeout(() => {
          window.location.replace("/");
        }, 700);
      })
      .catch((error) =>
        toastErrorAlert(error?.response?.data?.message ?? "Ocurrio un error")
      );
  };

  return (
    <div className="container">
      <p className="lead text-muted text-center">
        Por favor registre para poder generar ordenes en la tienda.
      </p>
      <form>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="name@example.com"
          />
          <label htmlFor="floatingInput">Correo</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" className="form-control" id="mobile" />
          <label htmlFor="floatingInput">Telefono</label>
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
          Registrarse
        </button>
        <Link to="/login">
          <p className="mt-5 mb-3 float-end">Iniciar Sesón</p>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
