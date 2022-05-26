import {Link} from "react-router-dom";
import React from "react";

function TodoPage() {
    const todoList = ['Item 1', 'Item 2', 'Item 3']

    return <div>
        <div>
            <button > <Link to="/">Table of contents</Link> </button>
        </div>

<div className="wrap">
    <h1>TodoPage</h1>

    {todoList.map((item, idx) => (
        <div className="list" >

            {idx+1}. {item}

        </div>

    ))}
</div>



    </div>
}

export default TodoPage;
