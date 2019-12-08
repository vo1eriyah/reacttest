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
                    <Row flexGrow={1} flexBasis='auto' horizontal='space-between'><Col xs={3}><Avatar/></Col>
                    <Col xs={9}>
                        <div className="self-info">
                        <span className="bio-description">100percent 50cent</span>
                        <span className="bio-nickname">@poltinnik</span>
                        </div>
                    </Col>
                    </Row>
                    <Row><Quote/></Row>
                    </Grid>
        )
    }

}                

/*<h1>Hello, my name is {props.name}!</h1> <h1 className="Bio-name">Valeriya</h1>*/

export default SelfInfo;