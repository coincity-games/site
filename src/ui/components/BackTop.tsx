import { useState, useEffect } from 'react';

import { returnTop } from "../../helpers";

export const BackTop = () => {

    const [isScrollDown, setIsScrollDown] = useState(false);

    const handleScrollDown = () => {
        if(window.scrollY > 280){
            setIsScrollDown(true);
        }
        else {
            setIsScrollDown(false);
        }
    };

    useEffect(() => {
      window.addEventListener('scroll', handleScrollDown);
    
      return () => {
        window.removeEventListener('scroll', handleScrollDown)
      }
    }, [])
    

  return (
    <div 
        className={`scroll-top ${ isScrollDown ? 'scroll-top-active' : '' }`}
        onClick={ returnTop }
    >
    </div>
  );
};
