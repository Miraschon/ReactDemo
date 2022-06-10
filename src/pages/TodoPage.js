import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import './TodoPage.css'
import {IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {loadTodo} from "../components/api/api"
import {add} from "../components/api/api"
import {update} from "../components/api/api"
import circle from './VAyR.gif'
import EditIcon from '@mui/icons-material/Edit'

let todoList = [] // create a list of items

let loading = true
let loaded = false

function TodoPage() {
    /*
    useState adds a variable to the state, if the variable changes-the state changes as well
    If the state changes-the component is renewed, including input value

    useState returns both variable and setter (function that changes var value)
     */
    const [num, setNum] = useState(1)


    function Loading() {
        if (loading)
            return <img src={circle} alt="circle" width="50" height="50"/>
        else
            return <></>
    }

    /*
    event happens when input is changed
    event.target is needed to reach input id and value
    target contains input
     */
    function getInputValue(event) {
        const input = event.target
        // show the user input value to console
        const idx = input.id.split('.')[1]
        todoList[idx].text = input.value
        setNum(num + 1)//
    }

    function updateItem(event) {
        const input = event.target
        // show the user input value to console
        const id = input.id.split('.')[0]
        const item= {
            id: id,
            text: input.value
        }
        update(item, refresh)
    }


    function deleteItem(event) {
        const button = event.target.parentElement.parentElement
        /*
        In this case, id is located in a parent element, needs to be reached through target.parentElement.parentElement
         */
        console.log(button.id)
        todoList.splice(button.id, 1)
        setNum(num + 1)
    }

    function moveUp(event) {
        let button = event.target.parentElement
        if (!button.id) {
            button = event.target.parentElement.parentElement
        }
        let id = +button.id
        let temp = todoList[id]
        if (id > 0) {
            todoList[id] = todoList[id - 1]
            todoList[id - 1] = temp
            console.log(todoList)
        }
        setNum(num + 1)
    }

    function getJson(json) {
        loading = false
        loaded = true
        todoList = json
        console.log('todo page: ', json)
        setNum(num + 1)
    }


    function moveDown(event) {
        let button = event.target.parentElement
        if (!button.id) {
            button = event.target.parentElement.parentElement
        }
        let id = +button.id
        console.log(id)
        let temp = todoList[id]
        if (id < todoList.length - 1) {
            todoList[id] = todoList[id + 1]
            todoList[id + 1] = temp
            console.log(todoList)
        }

        setNum(num + 1)
    }


    console.log('render')
    if (!loaded && todoList.length === 0) {
        loading = true
        loadTodo(getJson)
    }

    function refresh(){
        console.log('refresh')
        setNum(num + 1)
    }


    function addItem(){
        add(refresh)
    }

    return (
        <div>
            <div>
                <button className="table"><Link to="/">Table of contents</Link></button>
            </div>

            <div className="wrap">
                <h1>TodoPage</h1>
                <Loading/>
                {/* item is an array element, idx is its index */}
                {todoList.map((item, idx) => (
                    <div key={item.id}>
                        {/* id is used to bind array element index to input */}
                        <input className="item" id={item.id+'.'+idx} value={item.text} onBlur={updateItem} onChange={getInputValue}/>
                        {/* id is used to bind array element index to button */}
                        <IconButton id={item.id} onClick={moveUp} color="default" aria-label="up">
                            <KeyboardArrowUpIcon/>
                        </IconButton>
                        <IconButton id={item.id} onClick={moveDown} color="default" aria-label="down">
                            <KeyboardArrowDownIcon/>
                        </IconButton>
                        <IconButton id={item.id} onClick={deleteItem} color="default" aria-label="delete">
                            <DeleteIcon/>
                        </IconButton>

                    </div>
                ))}

                <p/>
                <IconButton onClick={addItem} color="default" aria-label="add">
                    <AddIcon/>
                </IconButton>
            </div>

        </div>
    )
}

export default TodoPage
