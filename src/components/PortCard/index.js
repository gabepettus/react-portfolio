import React from 'react';
import { 
  Card,
  CardImg
} from 'reactstrap';
import PortModal from '../PortModal';

import './style.css';

// const PortCard = ({ title, img, alt, repo, desc, link, tech, lessons }) => {
const PortCard = ( {data} ) => {

  const [modalShow, setModalShow] = React.useState(false);
  let imageWithPath = require(`../../data/images/${data.img}`);

  return (
    <>
      <Card className='view'>
        <CardImg src={imageWithPath} alt={data.alt} className='card-image' />
        <div className='mask'>
          <h2>{data.title}</h2>
          <p>{data.desc}</p>
            <button onClick={() => setModalShow(true)} className='info'>
              More Details
            </button>
        </div>
      </Card>

      <PortModal 
        show={modalShow} 
        toggle={() => setModalShow(false)} 
        title={data.title} 
        tech={data.tech} 
        lessons={data.lessons} 
        repo={data.repo} 
        link={data.link}
      />
    </>
  );
}

export default PortCard;