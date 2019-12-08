import React from 'react';
import '../Main.css'

function  Card (props){
    return (
        <div 
        className="My-card">
            <h3>{props.cardTitle}</h3>
                    <ul>
                        <li>I'm proud of nothing</li>
                        <li>I love dogs</li>
                        <li>I hate unconcious people</li>
                    </ul>
        </div>
    )
}

export default Card;