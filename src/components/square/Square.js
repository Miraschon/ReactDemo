import './Square.css'
import React from 'react'

function Square(props) {
    const {text, color} = props

    return <div className="square" style={{background:color}}>
        {text}
    </div>

}

export default Square
