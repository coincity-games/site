import { Link } from "react-router-dom";
import { useState } from "react";

import { LinkItem } from "..";
import { dataLink } from "../../data";
import { returnTop } from "../../helpers";


export const MenuMovil = () => {

  const [isOpen, setIsOpen] = useState(false);

  const hideShowMenuMobile = () => {
    if ( isOpen ){
      setIsOpen(false)
    }
    else{
      setIsOpen(true)
    }
  };
  

  return (
    <div className="menu-mobile-container">
      <Link 
        to="/"
        onClick={ returnTop }
      >
        <div className="logo-mobile-container">
          <img src={`${ import.meta.env.BASE_URL }/img/isotipo-coral.png`} alt="Logotipo de Crédito PyME México versión móvil" />
        </div>
      </Link>
      <div 
        onClick={ hideShowMenuMobile }
        className={ `hamburguer-icon ${ isOpen ? 'change' : '' }` }
      >
        <span className="line-one"></span>
        <span className="line-two"></span>
        <span className="line-three"></span>
      </div>
      <div className={ `links-mobile-container ${ isOpen ? 'links-mobile-container-active' : '' }` }>
        {
          dataLink.map( (link, index) => 
            <LinkItem 
              key={index} 
              linkUrl={link.linkUrl} 
              linkName={link.linkName} 
              isOpen={ hideShowMenuMobile }
              linkClass={ `link-item-mobile ${ isOpen ? 'link-item-mobile-in' : '' }` } 
            /> )
        }
      </div>
    </div>
  );
};
