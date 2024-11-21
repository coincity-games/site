
const imgUrl = `${ import.meta.env.BASE_URL }/img/`;

export const SecondWhiteSection = () => {
  return (
    <section className="white-section second-white-section">
        <h2>Diagnóstico Financiero Preliminar</h2>
        <p>Con solo tres grupos de documentos podemos hacer un diagnóstico rápido de aceptación, de esta manera reducimos el tiempo de procesos y elevamos el porcentaje de aceptación.</p>
        <div className="requirements-container">
          <div className="requirements-card">
            <img 
              src={`${ imgUrl }reporte-buro.jpg`} 
              alt="Primer requisito: buró de crédito" 
              className="requirements-img"
            />
            <div className="requirements-box">
              <h3 className="subtitle-section">Reporte De Crédito</h3>
              <p>El buró de crédito NO es determinante para darte el financiamiento, por ello te pedimos:</p>
              <strong>- Reporte Especial de Buró de Crédito</strong>
            </div>
          </div>
          <div className="requirements-card">
            <img 
              src={`${ imgUrl }estados-cuenta.jpg`} 
              alt="Segundo requisito: estados de cuenta" 
              className="requirements-img"
            />
            <div className="requirements-box">
              <h3 className="subtitle-section">Estados de Cuenta Bancarios</h3>
              <p>Nos permite ver tu capacidad de pago y sugerirte opciones para aumentar tu línea de crédito, para eso necesitamos:</p>
              <strong>- 6 Últimos Estados de Cuenta Bancarios</strong>
            </div>
          </div>
        </div>
        <div className="requirements-container">
          <div className="requirements-card">
            <img 
              src={`${ imgUrl }escrituras-inmueble.jpg`} 
              alt="Requisito opcional: escrituras de inmueble" 
              className="requirements-img"
            />
            <div className="requirements-box">
              <h3 className="subtitle-section">Inmueble Propio (opcional)</h3>
              <p>Dependiento de tu perfil de crédito será necesario dejar un inmueble libre de gravamen como garantía del crédito, por lo que te pediremos:</p>
              <strong>- Escritura de Inmueble Libre de Gravamen</strong>
            </div>
          </div>
        </div>
        <p>Adjunta esta documentación junto con tu correo y teléfono de contacto, así como el monto solicitado y envíalos al siguiente correo:</p>
        <p className="mail-paragraph">pyme@creditopymemexico.com</p>
        <p>Y en un plazo de 72 horas hábiles nos comunicaremos contigo para indicarte el monto de viabilidad, te explicaremos en detalle todo el proceso de gestión y  formalización del crédito, así mismo, despejaremos todas tus dudas y si decides comenzar el trámite, te acompañaremos durante todo el proceso de formalización tu crédito.</p>
    </section>
  );
};
