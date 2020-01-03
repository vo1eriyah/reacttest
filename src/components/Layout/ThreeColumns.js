import React from 'react'
import Profile from '../Profile/Profile';
import Post from '../Post/Post';
import Menu from '../Menu/MainMenu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import Wallet from '../Wallet/Wallet';
import Feed from '../Post/Feed';
import style from './Grid.scss'

function Threecolumns () {
    return(
        <React.Fragment>
            <div className="Grid Grid--full "><div className="Grid-cell"><MobileMenu/></div></div>
            <div className="wrapper">
                <div className="Grid Grid--gutters Grid--twoasides">
                    <div className="Grid-cell feed">
                        <Feed/>
                    </div>
                    <div className="Grid-cell aside aside-1">
                        <div className="My-Aside">
                            <Profile/>
                            <Menu/>
                            <div className="CTA-button"><MainButton caption="Write smth"/></div>
                        </div>
                    </div>

                    <div className="Grid-cell aside aside-2">
                        <Wallet/>
                    </div>
                </div>
            </div>

    </React.Fragment>

    );
}

export default Threecolumns;