import React from 'react'

class Avatar extends React.Component {
    constructor (avatar){
        super(avatar);
        //this.setState("");
    }

    render(props){
        return(
            <div className="avatar">
                <img className ="ava" width={this.props.width} height={this.props.height} src={this.props.imgurl}></img>
            </div>
        );
    }
    
}

export default Avatar;