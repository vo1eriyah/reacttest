import React from 'react'
import style from './MainButton.scss'

class MainButton extends React.Component{
    render(props){
        return (
            <button className="main_button" type="button">{this.props.caption}</button>

        )
    }
}

export default MainButton