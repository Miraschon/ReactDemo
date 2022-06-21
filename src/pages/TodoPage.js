import {Link} from 'react-router-dom'
import React, {useState} from 'react'
import './TodoPage.css'
import {IconButton} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import {add, deleteItemApi, dragDrop, fetchList, moveDown, moveUp, update} from "../components/api/api"
import circle from './VAyR.gif'
import {DragDrop} from "./DragNDropPage"
import {useQuery} from "react-query"

let todoList = [] // create a list of items

function TodoPage() {
    /*
    useState adds a variable to the state, if the variable changes-the state changes as well
    If the state changes-the component is renewed, including input value

    useState returns both variable and setter (function that changes var value)
     */
    const [num, setNum] = useState(1)
    const {data, status} = useQuery("list", fetchList)


    function Loading() {
        if (status === "loading")
            return <img src={circle} alt="circle" width="50" height="50"/>
        else
            return <></>
    }

    /*
    event happens when input is changed
    event.target is needed to reach input id and value
    target contains input
     */


    function updateItem(event) {
        const input = event.target
        const id = todoList[input.id].id //id value of array index is used
        const item = {
            id: id,
            text: input.value
        }
        update(item, refresh)
    }


    function deleteItem(event) {
        /* const button = event.target.parentElement.parentElement

        In this case, id is located in a parent element, needs to be reached through target.parentElement.parentElement

        console.log(button.id)
        todoList.splice(button.id, 1)
        */
        let button = event.target.parentElement
        if (!button.id) {
            button = event.target.parentElement.parentElement
        }
        let id = +button.id
        const input = event.target
        const item = {
            id: id,
            text: input.value
        }
        deleteItemApi(item, refresh)
    }

    function Up(event) {
        let button = event.target.parentElement
        if (!button.id) {
            button = event.target.parentElement.parentElement
        }
        let id = +button.id
        const input = event.target
        const item = {
            id: id,
            text: input.value
        }
        moveUp(item, refresh)
    }


    function Down(event) {
        let button = event.target.parentElement
        if (!button.id) {
            button = event.target.parentElement.parentElement
        }
        let id = +button.id
        const input = event.target
        const item = {
            id: id,
            text: input.value
        }
        moveDown(item, refresh)
    }


    function refresh() {
        setNum(num+1)
    }


    function addItem() {
        add(refresh)
    }

    function Item(props) {
        const [itemNum, setItemNum] = useState(1)
        const {item, idx} = props

        function refreshInput(event) {
            const input = event.target
            console.log(input.value)
            todoList[input.id].text = input.value //assign the text from input to the array item
            console.log(todoList)
            setItemNum(itemNum + 1)//
        }

        return <div key={item.id}>
            {/*item's id is its primary key in the database*/}
            {/* id is used to bind array element index to input */}
            <input className="item" id={idx} value={item.text} onBlur={updateItem} onChange={refreshInput}/>
            {/* id is used to bind array element index to button */}
            <IconButton id={item.id} onClick={Up} color="default" aria-label="up">
                <KeyboardArrowUpIcon/>
            </IconButton>
            <IconButton id={item.id} onClick={Down} color="default" aria-label="down">
                <KeyboardArrowDownIcon/>
            </IconButton>
            <IconButton id={item.id} onClick={deleteItem} color="default" aria-label="delete">
                <DeleteIcon/>
            </IconButton>
        </div>
    }

    function onItemDropped(srcId, dstId) {
        dragDrop(srcId, dstId, refresh)
    }

    return (
        <div>
            <div>
                <button className="table"><Link to="/">Table of contents</Link></button>
            </div>

            <div className="wrap">

                <h1>TodoPage</h1>
                {/* item is an array element, idx is its index */}
                {status === "error" && <p>Error fetching data</p>}
                <Loading/>
                {status === "success" && (
                    data.map((item, idx) => (
                        <DragDrop key={idx} id={item.id} onItemDropped={onItemDropped}><Item key={idx} item={item}
                            idx={idx}/></DragDrop>
                    ))
                )
                }
                <p/>
                <IconButton onClick={addItem} color="default" aria-label="add">
                    <AddIcon/>
                </IconButton>
                )
            </div>

        </div>
    )
}

export default TodoPage
