import React from 'react'

class MainButton extends React.Component{
    render(props){
        return (
            <button className="main-button" type="button">{this.props.caption}</button>

        )
    }
}

export default MainButton