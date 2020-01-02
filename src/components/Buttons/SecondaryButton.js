import React from 'react'

class SecondaryButton extends React.Component{
    render(props){
        return (
            <button className="secondary_button" type="button">{this.props.caption}</button>
        )
    }
}

export default SecondaryButton