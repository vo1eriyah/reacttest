import React from 'react'
import Twocolumns from '../Layout/Twocolumns'
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import Profile from '../Profile/Profile';
import Menu from '../Menu/MainMenu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import Post from '../Post/Post';
import style from '../Layout/Grid.scss'

class Settings_list extends React.Component {
    constructor (Settings_list){
        super(Settings_list)
    }
    
    render (props){
        return(
            <div className="wrapper">
            <div className="Grid-cell"><h1>Settings</h1><div className="">...</div></div>
            </div>
    );
        
    }

}

export default Settings_list