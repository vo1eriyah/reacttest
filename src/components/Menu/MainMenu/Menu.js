import React from 'react'
import { Grid, Row } from 'react-flexbox-grid'
import MenuItem from './MenuItem.js'
import SettingsIcn from './settings.svg'
import DialogsIcn from './dialogs.svg'
import NotificationsIcn from './notifications.svg'
import DealsIcn from './deals.svg'
import style from './MainMenu.scss'
import Settings_list from '../../Settings/Settings_list.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'

class Menu extends React.Component{
    constructor(Menu){
        super(Menu)
        this.state = {
            isSettingsClicked: false,
            isFeedActive: true
        } 
    
    }

    render(props) {
        let {isSettingsClicked, isFeedActive} = this.state;
        /*if (!isSettingsClicked) {
            return (
                <Settings_list />
            )
        }
        else {*/
            return (
                <Router>
                <div className="main-menu">
                    <MenuItem title="Home" url="/home"/>
                    <MenuItem icon={SettingsIcn} title="Settings" url="/settings"/>
                    <MenuItem icon={DialogsIcn} title="Dialogs" url="/dialogs"/>
                    <MenuItem icon={DealsIcn} title="My Deals" url="/deals"/>
                    <MenuItem icon={NotificationsIcn} title="Notifications" url="/notifications" />
                </div>
                </Router>
            );
        }
    
    
}
export default Menu
