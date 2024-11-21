import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-block">
            <span>Acerca de Crédito PyME México</span>
            <p>Crédito PyME México gestiona y promociona financiamiento para empresas y personas en todo el territorio nacional y se ajusta a los requisitos y condiciones de cada Banco y/o Financiera con la que se hace la gestión, en cuyos sitios podrá ver mayor detalle de la información aquí presentada.</p>
            <p>La información mostrada en este sitio web es unicamente de carácter informativo y no representa obligación alguna por parte de Crédito PyME México o Financieras o Bancos con los que se realiza el trámite.</p>
          </div>
          <div className="footer-block">
            <span>AVISOS</span>
            <span className="footer-links">
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
            </span>
          </div>
          <div className="footer-block">
            <span>SOCIAL</span>
            <span className="footer-links">
              <div className="twitter-icon icon"></div>
              &nbsp;
              <a href="https://twitter.com/credito_pyme_mx" target="_blank" rel="noreferrer noopener" title="Regálanos un RT 😊">TWITTER</a>
            </span>
          </div>
        </div>
    </footer>
  );
};
