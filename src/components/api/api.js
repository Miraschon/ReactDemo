

/* function loadTodo(getJson) {
    console.log('loading todo')
    fetch('http://192.168.0.5:8080/api/todo/all?delay=1')
        .then(function (response) {
            return response.json()
        }).catch(function (error) {
            console.error(error)
        })
        .then(
            function (todoList) {
                getJson(todoList)
            }
        )
}*/

function add(callBack){
    const item = {
        text: 'New Item'
    }
    const request = new Request('http://192.168.0.5:8080/api/todo', {
        method: 'POST',
        body: JSON.stringify(item),  // item to add. Should contain just 'text' field
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    // pass request object to `fetch()`
    fetch(request)
        .then(callBack())  // Only if the API call returns JSON. Otherwise, use res.text() or even an empty .then()
}

function update(item, callBack){
    console.log('update', item)
    const request = new Request('http://192.168.0.5:8080/api/todo', {
        method: 'PUT',
        body: JSON.stringify(item),  // item to add. Should contain just 'text' field
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    // pass request object to `fetch()`
    fetch(request)
        .then(callBack())  // Only if the API call returns JSON. Otherwise, use res.text() or even an empty .then()
}

function deleteItemApi(item, callBack){
    console.log('delete')
    const request = new Request('http://192.168.0.5:8080/api/todo/'+item.id, {
        method: 'DELETE'
    })

    // pass request object to `fetch()`
    fetch(request)
        .then(()=>callBack())  // Only if the API call returns JSON. Otherwise, use res.text() or even an empty .then()
}

function dragDrop(srcId, dstId, callBack){
    const request = new Request('http://192.168.0.5:8080/api/todo/drop?srcId='+srcId+'&dstId='+dstId,{
        method: 'PUT'
    })
    fetch(request)
        .then(()=>callBack())
}

function moveUp(item, callBack){
    const request = new Request('http://192.168.0.5:8080/api/todo/moveUp/'+item.id,{
        method: 'PUT'
    })
    fetch(request)
        .then(()=>callBack())
}

function moveDown(item, callBack){
    const request = new Request('http://192.168.0.5:8080/api/todo/moveDown/'+item.id,{
        method: 'PUT'
    })
    fetch(request)
        .then(()=>callBack())
}

const fetchList = async () => {
    const res = await fetch('http://192.168.0.5:8080/api/todo/all?delay=800')
    return res.json()
}



export {add, update, deleteItemApi, dragDrop, moveUp, moveDown, fetchList}