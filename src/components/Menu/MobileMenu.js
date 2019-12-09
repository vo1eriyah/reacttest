import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';

class MobileMenu extends React.Component {
    constructor(mobileMenu){
        super(mobileMenu);
    }

    render () {
        return (
            <div>
                <Grid className="mobile_menu">
                    <Row xs={12}>
                        <Col xs={6} className="mobile_menu_avatar"><Avatar width="32" height="32"/></Col>
                        <Col xs={6} classname="mobile_menu_wallet"></Col>
                    </Row>
                </Grid>
            </div>

        )       
    }
}

export default MobileMenu