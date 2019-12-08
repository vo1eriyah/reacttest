import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';

function Post (){
    return(
        <div>
        <Grid className="post-container"/>
        <Row>
            <Col><Avatar width="32" height="32"/></Col>
        </Row>
        </div>
    );
}

export default Post