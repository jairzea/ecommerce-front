import { getInformationUserStorage } from "../../../utils/getInformationUserStorage";

const Customerinformation = () => {
  const { name, email, customer_mobile } = getInformationUserStorage();
  return (
    <>
      <div className="container-fluid well well-sm">
        <div className="container">
          <div className="row">
            <ul className="breadcrumb text-uppercase">
              <p>
                Hola <b id="nombreResumen">{name}</b>, gracias por confiar en
                nostros, acontinuación te presentamos un resumen de tu orden:.
              </p>
              <p className="row">
                Correo electronico: <b id="correoResumen">{email}</b>
              </p>
              <p className="row">
                Telefono:
                <strong id="telefonoResumen">{customer_mobile}</strong>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customerinformation;
