import React from "react";
import { Container, Row, Col } from 'reactstrap';

import './style.css'
// import data from '../../data/skills.json';


const Home = () => {
    return (


      <Container>
        <h1 className="text-success">Home</h1>
        <Row className="mt-5">
          Gabes home
        </Row>
              <section id="home" className="flex height-fix">
        <div id="pt" className="canvas"></div>
        <div className="flex">
          <div className="text">
            Hello, I'm <span className="highlight">Gabe Pettus</span>.
            <br />
            I'm recovering systems engineer looking to be a full-stack web developer.
          </div>

          <div className="button page-link" dest="about">
            View my work <i className="mdi mdi-arrow-right"></i>
          </div>

        </div>
      </section>
      </Container >
    );
}

export default Home;