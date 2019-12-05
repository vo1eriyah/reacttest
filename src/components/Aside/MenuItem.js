import React from 'react'

class MenuItem extends React.Component{
    render(props) {
        return(
            <div className="menu-item">
                <span className="icon"><img src={this.props.icon}/></span>
                <a className="menu-link">{this.props.title}</a>
            </div>
        )
        }
    }
    export default MenuItem;