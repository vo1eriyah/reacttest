import React from 'react'

class MainButton extends React.Component{
    render(props){
        return (
            <button className="main_button" type="button">{this.props.caption}</button>

        )
    }
}

export default MainButton