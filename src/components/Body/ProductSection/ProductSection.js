import ProducBar from "./components/ProductBar";
import ProductShowcase from "./components/ProductShowcase";
import "./styles.css";

const ProducSection = ({ validateSession }) => {
  return (
    <>
      <ProducBar />
      <ProductShowcase validateSession={validateSession} />
    </>
  );
};

export default ProducSection;
