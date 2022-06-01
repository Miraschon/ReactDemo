import {Link} from "react-router-dom";
import * as React from "react";
import {useState} from "react";

function ReactStateFunc(props) {
    const [num1, setNum1] = useState(props.number)
    const [num2, setNum2] = useState(2)

    function increase1() {
        setNum1(num1+1)
    }

    function increase2() {
        setNum2(num2+1)
    }

    return <div>
        <button > <Link to="/">Table of contents</Link> </button>
        <div className="wrap"> <h1>React State Func</h1>
            <p>{num1}</p>
            <p>{num2}</p>
            {/*
                The method this.increase loses external context (this) if used as an argument
                That's why we should explicitly point the method to its context.
                */}
            <button onClick={increase1}>Increase num1</button>
            <button onClick={increase2}>Increase num2</button>
        </div>
    </div>
}

export default ReactStateFunc