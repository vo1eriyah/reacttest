import React from 'react'
import Footer from '../Footer/Footer';
import Profile from '../Profile/Profile';
import Post from '../Post/Post';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';
import MyGrid from '../Layout/MyGrid';
import Quote from '../Profile/Quote';
import Twocolumns from '../Layout/Twocolumns';
import Threecolumns from '../Layout/ThreeColumns';
import Settings_list from '../Settings/Settings_list';
import Feed from '../Post/Feed';
import Menu from '../Menu/MainMenu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import Wallet from '../Wallet/Wallet';
import PostSingle from '../Post/PostSingle';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Sidebar from '../Sidebar/Sidebar';
import Home from './Home';

const routes = (
    <Route component={App}>
        <Route path="/home" components={{ main: Feed, sidebar: Sidebar, sidebar1: Wallet }} />
        <Route path="/settings" components={{ main: Settings_list, sidebar: Sidebar}} />
        {/*<Route path="users" components={{ main: Users, sidebar: UsersSidebar }}>
            <Route path="users/:userId" component={Profile} />
</Route>*/}
    </Route>
)

  

export default function App() {
    return(

        <Router >
            <div className="Grid Grid--full "><div className="Grid-cell"><MobileMenu/></div></div>
            <div className="wrapper">
        
            <div className="Grid Grid--gutters Grid--twoasides">
            <div className="Grid-cell aside aside-1"><Sidebar/></div>
                <div className="Grid-cell feed">
                <Switch>
                
                    <Route path='/home' component={Home}/>
                    <Route path='/settings' component={Settings_list}/>
               
            </Switch>
            
            </div></div>
            </div>
          
        </Router>
    );
}
