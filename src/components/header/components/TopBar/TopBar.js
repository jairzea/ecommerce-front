import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { ImYoutube2 } from "react-icons/im";

const TopBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto ">
              <a class="navbar-brand" href="https://#">
                <FaFacebookF />
              </a>
              <a class="navbar-brand" href="https://#">
                <ImYoutube2 />
              </a>
              <a class="navbar-brand" href="https://#">
                <FaTwitter />
              </a>
              <a class="navbar-brand" href="https://#">
                <FaInstagramSquare />
              </a>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopBar;
