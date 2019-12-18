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
            <div className="main-menu">
                <MenuItem icon={SettingsIcn} title="Settings"/>
                <MenuItem icon={DialogsIcn} title="Dialogs"/>
                <MenuItem icon={DealsIcn} title="My Deals"/>
                <MenuItem icon={NotificationsIcn} title="Notifications"/>

            </div>
        );
    }
}

export default Menu

/*<Row ><span className="icon"><img src={SettingsIcn}/></span> <MenuItem title="Settings"/></Row>*/