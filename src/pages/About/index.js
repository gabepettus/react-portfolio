import React from 'react';
import { Container } from 'reactstrap';

import BioCard from '../../components/BioCard';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const About = () => {
  return (

    <Container>
      <Header />
      <h1>About Gabe</h1>
      <BioCard />
      <h1>Skill Set</h1>
      <Footer />
    </Container>
  );
}

export default About;