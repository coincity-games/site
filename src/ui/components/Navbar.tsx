import { useEffect, useState } from "react";

import { BackTop, MenuMovil, MenuPc } from "..";

export const Navbar = () => {

  const checkWidth = window.innerWidth > 1000;
  const [isResponsive, setIsResponsive] = useState<boolean>(checkWidth);

  const handleWidth = () => {
    setIsResponsive(window.innerWidth > 1000);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWidth);
    return () => {
      window.removeEventListener('resize', handleWidth);
    }
  }, []);

  return (
    <>
      <nav className="navigation-container">
          {
            isResponsive ? <MenuPc /> : <MenuMovil />
          }
      </nav>
      <BackTop />
    </>
  );
};
