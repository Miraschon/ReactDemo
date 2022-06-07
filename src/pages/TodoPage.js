import { Link } from 'react-router-dom'
import React, { useState } from 'react'
import './TodoPage.css'
import { IconButton } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

const todoList = ['Item 1', 'Item 2', 'Item 3'] // create a list of items

function TodoPage() {
    /*
    useState adds a variable to the state, if the variable changes-the state changes as well
    If the state changes-the component is renewed, including input value

    useState returns both variable and setter (function that changes var value)
     */
    const [num, setNum] = useState(1)
    /*
    event happens when input is changed
    event.target is needed to reach input id and value
    target contains input
     */
    function getInputValue(event) {
        const input = event.target
        // show the user input value to console
        todoList[input.id] = input.value
        setNum(num + 1)// using setter to change variable in state of the component, to renew input value
    }

    function add() {
        todoList.push('New Item')
        setNum(num + 1)
    }

    function deleteItem(event){
        const button=event.target.parentElement.parentElement
        /*
        In this case, id is located in a parent element, needs to be reached through target.parentElement.parentElement
         */
        console.log(button.id)
        todoList.splice(button.id,1)
        setNum(num + 1)
    }


    console.log('render')
    return (
        <div>]
            <div>
                <button className="table"><Link to="/">Table of contents</Link></button>
            </div>

            <div className="wrap">
                <h1>TodoPage</h1>

                {/* item is an array element, idx is its index */}
                {todoList.map((item, idx) => (
                    <div key={idx}>
                        {/* id is used to bind array element index to input */}
                        <input className="item" id={idx} value={item} onChange={getInputValue} />
                        {/* id is used to bind array element index to button */}
                        <IconButton id={idx} onClick={deleteItem} color="default" aria-label="delete">
                            <DeleteIcon />
                        </IconButton>
                    </div>
                ))}

                <p />
                <IconButton onClick={add} color="default" aria-label="add">
                    <AddIcon />
                </IconButton>
            </div>

        </div>
    )
}

export default TodoPage
