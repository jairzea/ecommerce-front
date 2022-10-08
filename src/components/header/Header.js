import Container from "react-bootstrap/Container";
import NavBar from "./components/NavBar/NavBar";
import TopBar from "./components/TopBar";

const Header = () => {
  return (
    <div>
      <Container>
        <TopBar />
        <NavBar />
      </Container>
    </div>
  );
};

export default Header;
