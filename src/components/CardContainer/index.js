import React from 'react';
import PortCard from '../../components/PortCard';
import { Card, Col } from 'reactstrap';

import './style.css';

const CardContainer = ({img, alt, title, repo, desc, link}) => {
  return (
    <Col className='view-container md-3'>
      <PortCard className='mt-5'
          title={title}
          img={img}
          alt={alt}
          repo={repo}
          desc={desc}
          link={link}
      >
      </PortCard>
    </Col>
  );
}

export default CardContainer;