
export const FirstDarkSection = () => {
  return (
    <section 
      className="dark-section first-dark-section"
      id="credito-pyme-bancario"
    >
        <img src={`${ import.meta.env.BASE_URL }/img/credito-pyme-bancario.jpg`} alt="Requisitos y características del crédito PyME bancario" />
        <h2 className="colored-subtitle">ELIGE EL FINANCIAMIENTO QUE NECESITAS</h2>
        <div className="bank-icon"></div>
        <h3 className="colored-subtitle">CRÉDITO PYME BANCARIO</h3>
        <p>El crédito PyME bancario es una excelente opción para negocios que están en marcha y que tienen una trayectoria comercial sólida, la principal ventaja de este crédito es su competitiva tasa de interés (a partir de un 1% mensual)</p>
        <h4 className="colored-subtitle">Características Básicas:</h4>
        <ul>
          <li>Plazos desde 12 meses y máximo 36 meses</li>
          <li>Tasa fija promedio del 12% anual*</li>
          <li>Crédito Simple o Revolvente</li>
          <li>Crédito sin garantía hipotecaria*</li>
          <li>Sin costos de gravamen hipotecario</li>
        </ul>
        <small>(*)sujeto a aprobación y análisis de crédito, la tasa y condiciones pueden cambiar según el resultado del análisis de riesgos</small>
        <a 
          href="#mas-informacion"
          className="button-main-color"
        >
          SOLICITAR MÁS INFORMACIÓN
        </a>
    </section>
  );
};
