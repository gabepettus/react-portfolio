import React from "react";
import { Container, Row, Col } from 'reactstrap';

import './style.css'
import Header from '../../components/Header';
// import data from '../../data/skills.json';


const Home = () => {
    return (
      <Container>
        <Header />
        <h1 className="text-success">Home</h1>
              <section id="home" className="flex height-fix">
        <div id="pt" className="canvas"></div>
        <Row className="mt-5">
        <div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Gabe Pettus</span>.
            <br/>
            I'm recovering systems engineer looking to be a full-stack web developer.
            <br/>
          </div>
        </div>
        </Row>
        <Row className="mt-5">
            <br/>
          <div className="button page-link" dest="about">
            View my work <i className="mdi mdi-arrow-right"></i>
          </div>
        </Row>

      </section>
      </Container >
    );
}

export default Home;