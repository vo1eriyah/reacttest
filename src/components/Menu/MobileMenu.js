import React from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Avatar from '../Profile/Avatar';

class MobileMenu extends React.Component {
    constructor(mobileMenu){
        super(mobileMenu);
    }

    render () {
        return (
            <div>
                <div className="Mobile-menu">
                    <Avatar height="32" width="32" imgurl="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/34179438_1798769306858268_5254876844385107968_o.jpg?_nc_cat=106&_nc_oc=AQlkiFUEdv7suFUNZFZxZZ6fMN8w-2LSRZhDmcnZ41lT8e3s5XU7w86wgmy5b9eREKA&_nc_ht=scontent.fiev1-1.fna&oh=b525227803f5e3b2dcb8a383e0a89c21&oe=5E5661CD"/>
                    <div className="wallet"></div>
                </div>
            </div>

        )       
    }
}

export default MobileMenu