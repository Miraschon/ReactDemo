import {Link} from "react-router-dom";
import React from "react";

function getInputValue(event) {
    // show the user input value to console
    const userValue = event.target.value;
    event.target.setState({
        name: 'text'
    });
    console.log(event.target);

}


function TodoPage() {
    const todoList = ['Item 1', 'Item 2', 'Item 3']
    console.log('render')
    return <div>
        <div>
            <button><Link to="/">Table of contents</Link></button>
        </div>

        <div className="wrap">
            <h1>TodoPage</h1>

            {todoList.map((item, idx) => (
                <div className="list">

                    <input id={idx} value={item} onChange={getInputValue}/>

                </div>

            ))}
        </div>


    </div>
}

export default TodoPage;
