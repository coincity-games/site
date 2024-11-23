import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LinkItem } from "..";
import { dataLink } from "../../data";


export const MenuPc = () => {

    const [isScrolled, setIsScrolled] = useState<boolean>(false);

    const handleSroll = () => {
        if (window.scrollY > 190) {
            setIsScrolled(true);
        }
        else {
            setIsScrolled(false);
        }        
    };

    useEffect(() => {
      window.addEventListener('scroll', handleSroll);
      return () => {
        window.removeEventListener('scroll', handleSroll);
      }
    }, [])
    
    
  return (
    <div className={ `menu-pc-container ${ isScrolled ? 'menu-pc-container-scrolled' : '' }` }>
        <Link 
            to="/"
        >
            <div className={ `logo-pc-container ${ isScrolled ? 'logo-pc-container-scrolled' : '' }` }>
                <img 
                    src={`${ import.meta.env.BASE_URL }/img/logo-site.png`} 
                    alt="Logotipo de Coincity"
                    className="logo-site-pc"/>
            </div>
        </Link>
        {
            dataLink.map( link => 
                <LinkItem 
                    key={ link.linkUrl } 
                    linkUrl={ link.linkUrl }
                    linkName={ link.linkName } 
                    linkClass="link-item-pc"
                /> 
            )
        }
    </div>
  );
};
