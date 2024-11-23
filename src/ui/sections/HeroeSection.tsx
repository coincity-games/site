import { HeroeSlide } from "../components/HeroeSlide";

export const HeroeSection = () => {
  return (
    <section className="heroe-section">
        <h1 className="heroe-title">Coincity</h1>
        <h2 className="heroe-subtitle">Vending Machines</h2>
        <p className="heroe-paragraph">Compra, venta y renta de máquinas vending de última generación</p>
        <a 
          href="#mas-informacion"
          className="button-main-color"
        >
          MÁS INFORMACIÓN
        </a>
        <HeroeSlide />
    </section>
  );
};

