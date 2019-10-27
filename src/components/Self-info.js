import React from 'react'
//import './Self-info.css'

function Selfinfo(props){
    return (
        <div 
        className="My-info">
            <br/>
            <h2>👋🏻</h2>
            <h1>Hello, my name is {props.name}!</h1>
            <p>I'm a very stupid woman with a pink dreams🌈
            </p>                <br/>
            <div 
            className="My-card">
                <h3>This are 3 things about me:</h3>
                <ul>
                        <li>I'm proud of nothing</li>
                        <li>I love dogs</li>
                        <li>I hate unconcious people</li>
                    </ul>
            </div>
        </div>
    )
}

export default Selfinfo;