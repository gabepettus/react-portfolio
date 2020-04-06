import React from 'react';
import PortCard from '../../components/PortCard';
import { Card, Col } from 'reactstrap';


const CardContainer = ({img, alt, title, repo, desc, link}) => {
  return (
    <Col md='4'>
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