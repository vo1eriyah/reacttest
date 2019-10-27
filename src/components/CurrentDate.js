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
                <p>
                    Now it's {this.state.date.toLocaleDateString()} 🙃
                </p>
            </div>
        )
    }
}

ReactDOM.render(<CurrentDate />, document.getElementById('root'))