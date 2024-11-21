import { useEffect, useState } from 'react';

import { dataImages } from '../../data';

export const HeroeSlide = () => {

  const [current, setCurrent] = useState<number>(0);

  const changeSlide = () => {
    setCurrent(current === dataImages.length - 1 ? 0 : current + 1);
  };
  
  useEffect(() => {
      setTimeout(() => {
        changeSlide();
      }, 5000);
  });
  

  return (
    <span className="slide-container">
      {
        dataImages.map((image, index) => {
          return (
            <div 
              key={ index }
              className={ `slide ${ index === current ? 'slide-active' : '' }` }
            >
              <img
                className="img-slide" 
                src={`${ image.slideUrl }`} 
                alt={ image.slideAlt } 
              />
              <h3 
                className={ `slide-subtitle ${ index === current ? 'slide-subtitle-active' : '' }` }>
                  { image.slideTitle }
              </h3>
            </div>
          )
        })
      }
    </span>
  );
};
