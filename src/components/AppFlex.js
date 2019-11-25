import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import '/components/appflex.css'

function AppFlex() {
    return(
        <div class='container'>
            <Grid/>
                <Row>
                    <div id="col">col1</div>
                </Row>
            </div>

    );
}

export default AppFlex