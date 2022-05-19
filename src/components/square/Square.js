import './Square.css';
import React, { useState } from 'react';

function random(n) {
    return Math.floor(Math.random() * n) + 1;
}

function randomColor() {
    const colors = ['red','green','blue','magenta', 'cyan']
    return colors[random(5) - 1];
}

function Square(props) {
    const {text} = props;
    const [color, setColor] = useState("red")

    function click() {
        console.log('Clicked')
        setColor(randomColor())
    }

    return <div onClick={click} className="square" style={{background:color}}>
        {text}
    </div>
}

export default Square;