import { linkData } from '../../interfaces';

export const LinkItem = ( { linkUrl, linkName, linkClass, isOpen }:linkData ) => {
  return (
    <a 
        href={ `#${ linkUrl }` } 
        className={ linkClass }
        onClick={ isOpen }
    >
        { linkName }
    </a>
  );
};
