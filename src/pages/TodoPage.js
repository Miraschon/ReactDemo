import {Link} from "react-router-dom";
import React, {useState} from "react";
import './TodoPage.css';
import {IconButton} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

let todoList = ['Item 1', 'Item 2', 'Item 3'] //create a list of items



function TodoPage() {
    const [num, setNum] = useState(1) //create a variable to renew input value, useState returns both variable and setter(function that changes var value)
    function getInputValue(event) {
        const input=event.target;
        // show the user input value to console
        todoList[input.id]=input.value;
        setNum(num+1);//using setter to change variable, to renew input value
    }

    function add(){
       todoList.push('New Item')
       setNum(num+1);
    }

    console.log('render')
    return <div>
        <div>
            <button className={'table'}><Link to="/">Table of contents</Link></button>
        </div>

        <div className="wrap">
            <h1>TodoPage</h1>

            {todoList.map((item, idx) => (
                <div key={idx} >
                    <input className={'item'} id={idx} value={item} onChange={getInputValue}/>
                </div>
            ))}

            <p></p>
            <IconButton onClick={add} color="default" aria-label="add" >
                <AddIcon />
            </IconButton>
        </div>


    </div>
}

export default TodoPage;
