import React from 'react'
import Footer from './Footer/Footer';
import Profile from './Profile/Profile';
import Post from './Post/Post';
import MobileMenu from './Menu/MobileMenu/MobileMenu';
import MyGrid from './Layout/MyGrid';
import Quote from './Profile/Quote';
import Twocolumns from './Layout/Twocolumns';
import Threecolumns from './Layout/ThreeColumns';


function App() {
    return(
       <React.Fragment >
           <Threecolumns/>
       </React.Fragment>
    );
}

export default App