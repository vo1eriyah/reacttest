import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import MenuItem from './MenuItem.js'
import SettingsIcn from './settings.svg'
import DialogsIcn from './dialogs.svg'
import NotificationsIcn from './notifications.svg'
import DealsIcn from './deals.svg'


class Menu extends React.Component{
    render() {
        return(
            <Grid className="main-menu">
                <Row><MenuItem icon={SettingsIcn} title="Settings"/></Row>
                <Row><MenuItem icon={DialogsIcn} title="Dialogs"/></Row>
                <Row><MenuItem icon={DealsIcn} title="My Deals"/></Row>
                <Row><MenuItem icon={NotificationsIcn} title="Notifications"/></Row>

            </Grid>
        );
    }
}

export default Menu

/*<Row ><span className="icon"><img src={SettingsIcn}/></span> <MenuItem title="Settings"/></Row>*/