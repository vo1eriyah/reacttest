import React from 'react'
import Profile from '../Profile/Profile'
import Menu from '../Menu/MainMenu/Menu';
import MainButton from '../Buttons/MainButton/MainButton';
import MobileMenu from '../Menu/MobileMenu/MobileMenu';

class Sidebar extends React.Component {
    constructor(Sidebar) {
        super(Sidebar)
    }

    render() {
        return (
                <div className="My-Aside">
                    <Profile /><Menu />
                    <div className="CTA-button"><MainButton caption="Write smth" /></div>
                </div>

        );
    }

}
export default Sidebar

