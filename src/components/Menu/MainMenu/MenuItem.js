import React from 'react'
import {Link} from 'react-router-dom'

class MenuItem extends React.Component{
    render(props) {
        return(
            <div className="menu-item app">
                <span className="icon"><img src={this.props.icon}/></span>
                <span className="menu-link"><a href={this.props.url}>{this.props.title}</a></span>
                {/*<span className="menu-link"><Link to={this.props.url}/>{this.props.title}</span>*/}
            </div>
        )
        }
    }
    export default MenuItem;