import React from 'react';
import { CardImg } from 'reactstrap';

import './style.css';

const PortCard = ({ img, alt }) => {

  let imageWithPath = (`../../data/images/${img}`);

  console.log("here",imageWithPath);

  return (

    <div>
      <CardImg src={imageWithPath} alt={alt} className='card-image' />
    </div>
  );
}

export default PortCard;