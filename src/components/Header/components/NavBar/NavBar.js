import logo from "../../../../assets/evertec-logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-nav me-auto ">
            <Link to="/">
              <img src={logo} alt="Bootstrap" width={150} />
            </Link>
          </ul>
          <Link to="/my-orders" className="p-2 text-success">
            Consultar mis ordenes
          </Link>
          |
          <Link to="/management" className="p-2 text-success">
            Administrador
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
