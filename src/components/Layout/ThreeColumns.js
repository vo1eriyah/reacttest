import React from 'react'
import Profile from '../Profile/Profile';
import Post from '../Post/Post';
import Menu from '../Menu/Menu';
import MainButton from '../Buttons/MainButton';
import MobileMenu from '../Menu/MobileMenu';
import Wallet from '../Wallet/Wallet';
import Feed from '../Post/Feed';

function Threecolumns () {
    return(
        <React.Fragment>
            <div class="Grid Grid--full "><div class="Grid-cell"><MobileMenu/></div></div>
            <div className="wrapper">
                <div class="Grid Grid--gutters Grid--twoasides">
                    <div class="Grid-cell feed">
                        <Feed/>
                    </div>
                    <div class="Grid-cell aside aside-1">
                        <div className="My-Aside">
                            <Profile/>
                            <Menu/>
                            <div className="CTA-button"><MainButton caption="Write smth"/></div>
                        </div>
                    </div>

                    <div class="Grid-cell aside aside-2">
                        <Wallet/>
                    </div>
                </div>
            </div>

    </React.Fragment>

    );
}

export default Threecolumns;