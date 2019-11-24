import React from 'react';
import Selfinfo from './Self-info';
import Footer from './Footer';
import Avatar from './Avatar';
import Post from './Post';
import { Grid, Row, Col } from 'react-flexbox-grid';

function App(props) {
  return (
    <div class="container" >
        <Row>
            <Col md={3}>
              <Avatar />
              <Selfinfo /*name="Valeriya"*//>
            </Col>
            <Col md={4}>
              <Post/>
            </Col>           
        </Row>
        
      <Footer />
    </div>
  );
}

export default App;
