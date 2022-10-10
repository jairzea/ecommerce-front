import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar";

const Header = () => {
  return (
    <div className="container">
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Header;
