import React from 'react';
import Selfinfo from '../Profile/Profile';
import Footer from '../Footer/Footer';
import Avatar from '../Profile/Avatar';
import Post from '../Post/Post';
import { Grid, Row, Col } from 'react-flexbox-grid';

/*const App2 = () => (
  <Flex>
    <Box width={1/2} px={2}>
      Half width
    </Box>
    <Box width={1/2} px={2}>
      Half width
    </Box>
  </Flex>
)
*/

/*function App_deprecated(props) {
  return (
    <div></div>
  );
}*/

function App() {
  return(
     
     <div className='container'>
          <Grid fluid />
              <Row className="mobile_menu" ><MobileMenu/></Row>
              <Row className="content">
                  <Col className="aside" xs={0} sm={0} lg={3}>
                      <Profile/>
                      <Menu/>
                      <div><MainButton caption="Write post!"/></div>
                  </Col>

                  <Col className="postik" xs={12} sm={12} lg={6}>
                      <div><Post author_name="Mathew" author_nickname="@catchmccounaghey"/></div>
                  </Col>
                  <Col className="wallet" xs={0} lg={3} sm={3} >
                      <div></div>
                  </Col>
              </Row>

         </div>
  );
}


export default App_deprecated;

