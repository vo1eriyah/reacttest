import React from 'react'
import ReactDOM from 'react-dom'

class CurrentDate extends React.Component{
    constructor(props){
        super(props)
        this.state = {date: new Date()}
    }
    
    render(){
        return(
            <div>
                <h2>wow!</h2>
                <p>
                    Now it's {this.state.date.toLocaleDateString()} 🙃
                </p>
            </div>
        )
    }
}

ReactDOM.render(<CurrentDate />, document.getElementById('datetime'))