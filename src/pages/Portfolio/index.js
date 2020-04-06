import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import CardContainer from '../../components/CardContainer';

import portfolios from '../../data/portfolioData.json';

const Portfolio = () => {
  return (
    <>
      <Header />
      <Container>
        <h1>Portfolio Gabe</h1>
        <h3 className='mt-4'>Recent Work</h3>
        <Row>
          {portfolios.map((port) => {
            console.log(port);
            return (
              <CardContainer 
                key={port.id}
                title={port.title}
                img={port.img}
                repo={port.repo}
                desc={port.desc}
              />
            );
          })}
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Portfolio;