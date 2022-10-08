import banner from "../../../assets/banner/default.jpg";
import "./styles.css";

const Banner = () => {
  return (
    <figure class="banner">
      <img src={banner} alt="banner" class="img-responsive" width="100%" />

      <div class="textoBanner textoDer">
        <h1 style={{ color: "#fff" }}>OFERTAS ESPECIALES</h1>

        <h2 style={{ color: "#fff" }}>
          <b>90% off</b>
        </h2>

        <h3 style={{ color: "#fff" }}>Termina el 31 de Mayo</h3>
      </div>
    </figure>
  );
};

export default Banner;
