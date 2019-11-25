import React from 'react'
import Card from './Card'
import Avatar from './Avatar'
import { Grid, Row, Col } from 'react-flexbox-grid'

class SelfInfo extends React.Component{
    render (props){
        return(
            <Grid container className="Bio"
            spacing={12}>
                <Row>
                    <Col xs={2}><Avatar/></Col>

                    <Col xs={10}>
                        <h1 className="Bio-header">Valeriya</h1>
                        <p className="Bio-description">I'm a very stupid woman with a pink dreams🌈</p>        
                    </Col> 

                    <Col l={12}><Card cardTitle="This are 3 things about me:"/></Col>       
                </Row>
            </Grid>
        )
    }

}                

/*<h1>Hello, my name is {props.name}!</h1>*/

export default SelfInfo;