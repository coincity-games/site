
const imgUrl = `${ import.meta.env.BASE_URL }/img/`;

export const FirstWhiteSection = () => {
  return (
    <section className="white-section first-white-section">
        <h2>Especialistas en Crédito PyME y Empresarial</h2>
        <p>Analizamos cada caso de forma particular para identificar tu perfil financiero y sugerirte las mejores opciones de crédito, identificamos tus fortalezas financieras y comerciales dependiendo de tu giro, tamaño de tu negocio y proyecto de inversión</p>
        <div className="figures-container">
          <div className="card-container">
            <img 
              src={`${ imgUrl }customer.png`} 
              alt="Amplia experiencia en el sector crediticio" 
              className="container-img"
            />  
            <h3 className="subtitle-section">Amplia Experiencia</h3>
            <p>Más de 15 años en el sector crediticio</p>
          </div>  
          <div className="card-container">
            <img 
              src={`${ imgUrl }folder.png`} 
              alt="Abanico de opciones crediticias" 
              className="container-img"
            />
            <h3 className="subtitle-section">Diversidad de Opciones</h3>
            <p>Portafolio amplio de Bancos y Financieras Reconocidas y Registradas</p>
          </div>
          <div className="card-container">
            <img 
              src={`${ imgUrl }efectivity.png`} 
              alt="Rapidez en la gestión" 
              className="container-img"
            />
            <h3 className="subtitle-section">Eficiencia</h3>
            <p>Agilidad en respuesta y rapidez en procesos de formalización</p>
          </div>
        </div>
    </section>
  );
};
