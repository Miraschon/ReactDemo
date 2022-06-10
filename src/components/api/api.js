function loadTodo(getJson) {
    console.log('loading todo')
    fetch('http://192.168.0.5:8080/api/todo/all')
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
}

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
    console.log('update')
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

export {loadTodo, add, update}