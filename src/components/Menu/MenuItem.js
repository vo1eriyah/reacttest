import React from 'react'

class MenuItem extends React.Component{
    render(props) {
        return(
            <div className="menu-item">
                <span className="icon"><img src={this.props.icon}/></span>
                <span className="menu-link"><a href={this.props.url}>{this.props.title}</a></span>
            </div>
        )
        }
    }
    export default MenuItem;