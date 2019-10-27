import React from 'react'
import ReactDOM from 'react-dom'

class CurrentDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({ date: new Date()});
    }

    render(){
        return(
            <div
            className="Date">
                <p>
                    Now it's {this.state.date.toLocaleTimeString()}🙃
                </p>
            </div>
        )
    }
}



export default CurrentDate;