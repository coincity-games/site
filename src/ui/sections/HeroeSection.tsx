import { HeroeSlide } from "../components/HeroeSlide";

export const HeroeSection = () => {
  return (
    <section className="heroe-section">
        <h1 className="heroe-title">Crédito PyME México</h1>
        <h2 className="heroe-subtitle">Financiamiento a la medida de tu Empresa</h2>
        <p className="heroe-paragraph">Encontramos el financiamiento idóneo a tu perfil comercial, fiscal y crediticio, accede a el capital necesario para tu negocio o emprendimiento</p>
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

