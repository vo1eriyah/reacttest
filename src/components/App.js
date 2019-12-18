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
       
       <div className='my_container'>
                <div className="mobile_menu" ><MobileMenu/></div>
                <div className="col_third">
                    <aside>
                        <Profile/>
                        <Menu/>
                        <MainButton caption="Write post!"/>
                    </aside>
                    </div>
                    <div className="col_half">
                        <Post author_name="Mathew" author_nickname="@catchmccounaghey"/>
                    </div> 
                    <div className="col_third">                 
                        <div className="wallet" ></div>
                    </div>  

           </div>
    );
}

export default App