import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer/Footer';
import SelfInfo from './Profile/Profile';
import Post from './Post/Post';
import Menu from './Aside/Menu';
import MainButton from './Buttons/MainButton';


function App() {
    return(
       <div class='container'>
            <Grid container 
            />
                <Row className="content">
                    <Col className="Aside" sm={3} lg={3}>
                        <SelfInfo/>
                        <Menu/>
                        <div  style={{ margin: "24px" }} ><MainButton caption="Write post!"/></div>
                    </Col>

                    <Col className="postik" xs={12} md={6}>
                        <div><Post/></div>
                    </Col>
                    <Col lg={3}>
                        <div class="col todelete"></div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}><Footer/></Col>
                </Row>
                <Row>
                    <Col lg={12}><Footer/></Col>
                </Row>
           </div>
    );
}

export default App