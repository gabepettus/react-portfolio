import React from 'react';
import { 
  Card,
  CardImg
} from 'reactstrap';

import './style.css';

const PortCard = ({ title, img, alt, repo, desc, link }) => {

  let imageWithPath = require(`../../data/images/${img}`);

  return (
    <Card className='view'>
      <CardImg src={imageWithPath} alt={alt} className='card-image' />
      <div className='mask'>
        <h2>{title}</h2>
        <p>{desc}</p>
          <a href='#' className='info'>More Details</a>
      </div>
    </Card>
  );
}

export default PortCard;