import React from 'react'
import style from './SecondaryButton.scss'

class SecondaryButton extends React.Component{
    render(props){
        return (
            <button className="secondary_button" type="button">{this.props.caption}</button>
        )
    }
}

export default SecondaryButton