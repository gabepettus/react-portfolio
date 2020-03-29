import React from "react";
import { Container, Row, Col } from 'reactstrap';

import './style.css'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
// import data from '../../data/skills.json';


const Home = () => {
    return (
      <div>
      <Header />
        <Container>
          <section id="home" className="flex height-fix">
          <div id="pt" className="canvas"></div>
          <Row className="mt-5">
          <div className="flex">
            <div className="text">
              Hello, I'm <span className="highlight">Gabe Pettus</span>.
              <br/>
              I'm a recovering systems engineer looking to be a full-stack web developer.
              <br/>
              <br/>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed. </p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et nibh id velit tempor fringilla eget et ipsum. Sed suscipit, velit non accumsan blandit, felis dui sollicitudin risus, vitae aliquet felis sem quis enim. Quisque blandit arcu nec scelerisque scelerisque. Aenean vehicula rutrum justo commodo volutpat. Nullam vestibulum vel ipsum eget vulputate. Etiam vitae tellus est. Aliquam erat volutpat. Nulla a consequat felis. In hac habitasse platea dictumst. Integer quis gravida libero, quis eleifend nisl. Nunc eu porttitor eros. Cras scelerisque orci urna, a fringilla ligula laoreet sed. </p>
            </div>
          </div>
          </Row>
          </section>
        </Container >
      <Footer />
      </div>
    );
}

export default Home;