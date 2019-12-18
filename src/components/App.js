import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Post from './Post/Post';
import Menu from './Menu/Menu';
import MainButton from './Buttons/MainButton';
import MobileMenu from './Menu/MobileMenu';

function App() {
    return(
       
       <div className='container'>
                <div className="mobile_menu" ><MobileMenu/></div>
                <div className="content">
                    <div className="aside">
                        <Profile/>
                        <Menu/>
                        <div><MainButton caption="Write post!"/></div>
                    </div>

                    <div className="postik">
                        <div><Post author_name="Mathew" author_nickname="@catchmccounaghey"/></div>
                    </div>
                    <div className="wallet" >
                        <div></div>
                    </div>
                </div>

           </div>
    );
}

export default App