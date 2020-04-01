import React from 'react';
import { Container } from 'reactstrap';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BioCard from '../../components/BioCard';
import SkillCard from '../../components/SkillCard';
import CredentialCard from '../../components/CredentialCard';

// import skillData from '../../data/skillData.json';
// import credData from '../../data/credData.json';

const About = () => {
  return (

    <Container>
      <Header />
      <h1>About</h1>
      <BioCard />
      <h1 className="mt-4">Skills</h1>
      {/* <SkillCard data={skillData} /> */}
      <SkillCard/>
      <CredentialCard/>
      <Footer />
    </Container>
  );
}

export default About;