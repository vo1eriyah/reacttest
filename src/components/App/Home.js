import {BrowserRouter as Router, Route} from 'react-router-dom'
import Settings_list from '../Settings/Settings_list';
import Feed from '../Post/Feed';
import Menu from '../Menu/MainMenu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import Wallet from '../Wallet/Wallet';
import PostSingle from '../Post/PostSingle';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import Profile from '../Profile/Profile';
import React from 'react'

export default function Home() {
    return (

       <React.Fragment>
            <div className="Grid Grid--gutters Grid--twoasides">
                   <div className="Grid-cell feed">
                       <Feed/>
                   </div>
                   
                   <div className="Grid-cell aside aside-2">
                       <Wallet/>
                   </div>
                   </div>
   </React.Fragment>

    );
}