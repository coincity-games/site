import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="not-found-container">
        <img src={`${ import.meta.env.BASE_URL }/img/not-found.jpg`} alt="" className="not-found-img"/>
        <p className="not-found-paragraph">Parece que lo que buscas no está aquí</p>
        <Link to='/' className="not-found-button">
            <button >PÁGINA PRINCIPAL</button>
        </Link>
    </div>
  );
};
