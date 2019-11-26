import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer';
import SelfInfo from './Self-info';
import Post from './Post';

function AppFlex() {
    return(
        <div class='container'>
            <Grid container 
            />
                <Row>
                    <Col xs={3}>
                        <div><SelfInfo/></div>
                    </Col>

                    <Col md={6}>
                        <div><Post/></div>
                    </Col>
                    <Col lg={3}>
                        <div class="col todelete">sidebar</div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}><Footer/></Col>
                </Row>
           </div>



    );
}

export default AppFlex