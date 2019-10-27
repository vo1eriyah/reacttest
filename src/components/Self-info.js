import React from 'react'
import Card from './Card'

class SelfInfo extends React.Component{
    render (props){
        return(
            <div 
            className="My-info">
                <h1>👋🏻</h1>
                <h1>Hello, my name is Valeriya!</h1>
                <p>I'm a very stupid woman with a pink dreams🌈</p>                
                <Card cardTitle="This are 3 things about me:"/>
            </div>
        )
    }

}                

/*<h1>Hello, my name is {props.name}!</h1>*/

export default SelfInfo;