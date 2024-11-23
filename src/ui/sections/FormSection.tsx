import { useForm } from "../../hooks";
import { FormData } from "../../interfaces";

export const FormSection = () => {
    
  const { formulario, handleChange, handleSubmit } = useForm<FormData>({
    email: '',
    nombre: '',
    telefono: '',
  });
  const { email, nombre, telefono } = formulario;


  return (
    <section 
      className="form-section dark-section"
      id="mas-informacion"
    >
      <img src={`${ import.meta.env.BASE_URL }/img/informacion.jpg`} alt="Solicita más información" />
      <div className="info-icon"></div>
      <h2 className="colored-subtitle">Despeja todas tus dudas</h2>
      <p>Si necesitas información adicional por favor envíanos tus datos de contacto y nos comunicaremos contigo para aclarar tus dudas o comenzar con tu trámite.</p>
      <form
        onSubmit={ (e) => handleSubmit( e, formulario ) }
      >
        <div className="form-container">
          <label>Nombre</label>
          <input 
            type="text"
            name="nombre" 
            onChange={ handleChange }
            value={ nombre }
          />
          <label>Correo</label>
          <input 
            type="text"
            name="email" 
            onChange={ handleChange }
            value={ email }
          />
          <label>Teléfono</label>
          <input 
            type="text"
            name="telefono" 
            onChange={ handleChange }
            value={ telefono }
          />
          {/* <label>Monto Solicitado</label>
          <input 
            type="text"
            name="monto" 
            onChange={ handleChange }
            value={ monto }
          /> */}
          <button 
            className="form-button" 
            type="submit"
          >
            Envíame Más Información
          </button>
        </div>
      </form>
    </section>
  );
};
