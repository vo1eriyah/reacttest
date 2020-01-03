import React from 'react'
import Profile from '../Profile/Profile';
import Post from '../Post/Post';
import Menu from '../Menu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import MobileMenu from '../Menu/MobileMenu';


function Twocolumns () {
    return(
        <div className="wrapper">
           <div class="Grid Grid--full"><div class="Grid-cell"><MobileMenu/></div></div>

                <div className="Grid Grid--gutters Grid--1of3 ">
                    <div className="Grid-cell"><div className="content-1of3">
                    <div className="My-Aside">
                        <Profile/>
                        <Menu/>
                        <div className="CTA-button"><MainButton caption="Write smth"/></div>
                    </div>
                    </div>
                </div>  
            

            <div className="Grid-cell"><div className=""><Post/></div></div>
            </div>

            
       </div>
    );
}

export default Twocolumns;