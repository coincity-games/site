// import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-block">
            <span>Acerca de Coincity</span>
            <p>En CoinCity, transformamos la forma de hacer negocios a través de soluciones innovadoras en máquinas vending. Nos especializamos en la compra, venta y renta de equipos de alta calidad, diseñados para satisfacer las necesidades de emprendedores, empresas y eventos en busca de automatización y rentabilidad.</p>
            <p>Con un enfoque en la tecnología y el servicio al cliente, en CoinCity ofrecemos más que máquinas; brindamos herramientas para que nuestros clientes expandan sus oportunidades de negocio. Nos enorgullece trabajar de la mano contigo para personalizar soluciones que impulsen tu éxito.</p>
            <p>Ya sea que busques iniciar un negocio vending, optimizar tus espacios comerciales o ofrecer servicios únicos en tus eventos, en CoinCity encontrarás la experiencia y los productos ideales para llevar tu visión al siguiente nivel.</p>
          </div>
          <div className="footer-block">
            <span>AVISOS</span>
            {/* <span className="footer-links">
              <div className="shield-icon icon"></div>
              &nbsp;
              <Link 
                to="/politica-de-privacidad" 
                title="Consulta nuestra política de privacidad" 
              >
                POLÍTICA DE PRIVACIDAD
              </Link>
            </span>
            <span className="footer-links">
              <div className="cookies-icon icon"></div>
              &nbsp;
              <Link 
                to="/politica-de-cookies" 
                title="Consulta nuestra política de cookies" 
              >
                POLÍTICA DE COOKIES
              </Link>
            </span> */}
          </div>
          <div className="footer-block">
            <span>SOCIAL</span>
            {/* <span className="footer-links">
              <div className="twitter-icon icon"></div>
              &nbsp;
              <a href="https://twitter.com/credito_pyme_mx" target="_blank" rel="noreferrer noopener" title="Regálanos un RT 😊">TWITTER</a>
            </span> */}
          </div>
        </div>
    </footer>
  );
};
