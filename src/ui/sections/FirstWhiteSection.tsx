
const imgUrl = `${ import.meta.env.BASE_URL }/img/`;

export const FirstWhiteSection = () => {
  return (
    <section className="white-section first-white-section">
        <h2>Impulsa tu negocio con nuestras máquinas vending</h2>
        <p>En Coincity, somos expertos en la compra, venta y renta de máquinas vending que combinan tecnología, diseño y funcionalidad.</p>
        <div className="figures-container">
          <div className="card-container">
            <img 
              src={`${ imgUrl }customer.png`} 
              alt="Encuentra la máquina que se adapta perfectamente a tu espacio y necesidades" 
              className="container-img"
            />  
            <h3 className="subtitle-section">Una maquina para cada necesidad</h3>
            <p>Encuentra la máquina que se adapta perfectamente a tu espacio y necesidades.</p>
          </div>  
          <div className="card-container">
            <img 
              src={`${ imgUrl }folder.png`} 
              alt="Precios para cada bolsillo" 
              className="container-img"
            />
            <h3 className="subtitle-section">Precios para cada bolsillo</h3>
            <p>Soluciones sin compromisos a largo plazo, perfectas para eventos o proyectos específicos.</p>
          </div>
          <div className="card-container">
            <img 
              src={`${ imgUrl }efectivity.png`} 
              alt="Diferentes opciones de pago" 
              className="container-img"
            />
            <h3 className="subtitle-section">Diferentes opciones de pago</h3>
            <p>Aumenta tus ingresos con una inversión mínima.</p>
          </div>
        </div>
    </section>
  );
};
