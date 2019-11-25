import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';

function AppFlex() {
    return(
        <div class='container'>
            <Grid
            />
                <Row>
                    <Col xs={6}>
                        <div id="col">col1</div>
                    </Col>

                    <Col xs={6}>
                        <div id="col">col2</div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={2}>
                        <div id="col">col1</div>
                    </Col>

                    <Col xs={6}>
                        <div id="col">col2</div>
                    </Col>

                    <Col md={2}>
                        <div id="col">col3</div>
                    </Col>
                    <Col lg={2}>
                        <div id="col">col4</div>
                    </Col>
                </Row>
            </div>

    );
}

export default AppFlex