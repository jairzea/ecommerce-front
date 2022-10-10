// import Container from "react-bootstrap/Container";
import Banner from "./Banner/Banner";
import ProducSection from "./ProductSection/ProductSection";

const Body = ({ validateSession }) => {
  return (
    <>
      <Banner />
      <ProducSection validateSession={validateSession} />
    </>
  );
};

export default Body;
