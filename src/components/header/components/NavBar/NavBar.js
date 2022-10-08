import logo from "../../../../assets/evertec-logo.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="container">
          <ul class="navbar-nav me-auto ">
            <Link to="/">
              <img src={logo} alt="Bootstrap" width={150} />
            </Link>
          </ul>
          <Link to="/my-orders" className="p-2">
            Consultar mis ordenes
          </Link>
          |
          <Link to="/management" className="p-2">
            Administrador
          </Link>
          |
          <Link to="/management" className="p-2">
            <button type="button" class="btn btn-success">
              <AiOutlineShoppingCart />
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
