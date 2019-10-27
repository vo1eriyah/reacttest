import React from 'react'
import Card from './Card'

function Selfinfo(props){
    return (
        <div 
        className="My-info">
            <br/>
            <h2></h2>
            <h1>👋🏻Hello, my name is {props.name}!</h1>
            <p>I'm a very stupid woman with a pink dreams🌈
            </p>                
            <Card cardTitle="This are 3 things about me:"/>
        </div>
    )
}

export default Selfinfo;