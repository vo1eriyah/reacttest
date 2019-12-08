import React from 'react'
import Card from '../Deprecated❌/Card'
import Avatar from './Avatar'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Responsive as ResponsiveGridLayout } from 'react-grid-layout';
import Quote from './Quote';

class SelfInfo extends React.Component{
    render (props){
        return(
            <Grid direction="column" spacing={8}>
                    <Row flexGrow={1} flexBasis='auto' horizontal='space-between'>
                        <Col className="avatar" lg={2} sm={3} xs={2}>
                            <Avatar width="48px" height="48px" imgurl="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/34179438_1798769306858268_5254876844385107968_o.jpg?_nc_cat=106&_nc_oc=AQlkiFUEdv7suFUNZFZxZZ6fMN8w-2LSRZhDmcnZ41lT8e3s5XU7w86wgmy5b9eREKA&_nc_ht=scontent.fiev1-1.fna&oh=b525227803f5e3b2dcb8a383e0a89c21&oe=5E5661CD"/>
                        </Col>
                        <Col className="self-info" xs={9} lg={9}>
                            <span className="bio-name">100percent 50cent</span>
                            <span className="bio-nickname">@poltinnik</span>
                        </Col>
                    </Row>
                    <Row><Quote/></Row>
                    </Grid>
        )
    }

}                

/*<h1>Hello, my name is {props.name}!</h1> <h1 className="Bio-name">Valeriya</h1>*/

export default SelfInfo;