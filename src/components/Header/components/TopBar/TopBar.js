import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { BiLogOut } from "react-icons/bi";
import { ImYoutube2 } from "react-icons/im";
import { useEffect, useState } from "react";
import { toastWarningAlert } from "../../../../utils/sweet.alert.utils";

const TopBar = () => {
  const [sesion, setSession] = useState();
  useEffect(() => {
    const session = localStorage.getItem("access_token");
    setSession(session);
    if (!session) {
      toastWarningAlert("No se ha detectado sessión activa");
    }
  }, [sesion]);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ">
              <a className="navbar-brand" href="https://#">
                <FaFacebookF />
              </a>
              <a className="navbar-brand" href="https://#">
                <ImYoutube2 />
              </a>
              <a className="navbar-brand" href="https://#">
                <FaTwitter />
              </a>
              <a className="navbar-brand" href="https://#">
                <FaInstagramSquare />
              </a>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
            {sesion && (
              <BiLogOut
                onClick={() => setSession(localStorage.clear())}
                size={40}
                className="text-success p-1"
              />
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
