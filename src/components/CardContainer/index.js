import React from 'react';
import PortCard from '../../components/PortCard';
import { Card, Col } from 'reactstrap';

import './style.css';

// const CardContainer = ({img, alt, title, repo, desc, link}) => {
const CardContainer = ( data ) => {
  return (
    <Col className='view-container md-3'>
      <PortCard className='mt-5' data={data} />
    </Col>
  );
}

export default CardContainer;