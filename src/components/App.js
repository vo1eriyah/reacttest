import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Post from './Post/Post';
import Menu from './Menu/Menu';
import MainButton from './Buttons/MainButton';
import MobileMenu from './Menu/MobileMenu';

function App() {
    return(
       
       <div className='container'>
            <Grid fluid />
                <Row className="mobile_menu" hidden><MobileMenu/></Row>
                <Row className="content">
                    <Col className="aside" sm={3} lg={3}>
                        <Profile/>
                        <Menu/>
                        <div><MainButton caption="Write post!"/></div>
                    </Col>

                    <Col className="postik" xs={12} sm={12} lg={6}>
                        <div><Post author_name="Mathew" author_nickname="@catchmccounaghey"/></div>
                    </Col>
                    <Col className="wallet" xs={3} lg={3} sm={3} >
                        <div></div>
                    </Col>
                </Row>

           </div>
    );
}

export default App