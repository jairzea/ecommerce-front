import Modal from "../commons/Datatable/Modal/Modal";

const RegisterOrder = () => {
  return (
    <>
      <Modal title="Registrar Orden">
        <form>
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Correo</label>
          </div>
          <div className="form-floating mb-4">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Contraseña</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Guardar
          </button>
        </form>
      </Modal>
    </>
  );
};

export default RegisterOrder;
