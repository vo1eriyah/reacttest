import React from 'react'

class Avatar extends React.Component {
    constructor (avatar){
        super(avatar);
        //this.setState("");
    }

    render(props){
        return(
            <div>
                <img 
                className ="ava"
                src="https://scontent.fiev1-1.fna.fbcdn.net/v/t1.0-9/34179438_1798769306858268_5254876844385107968_o.jpg?_nc_cat=106&_nc_oc=AQlkiFUEdv7suFUNZFZxZZ6fMN8w-2LSRZhDmcnZ41lT8e3s5XU7w86wgmy5b9eREKA&_nc_ht=scontent.fiev1-1.fna&oh=b525227803f5e3b2dcb8a383e0a89c21&oe=5E5661CD"></img>
            </div>
        );
    }
    
}

export default Avatar;