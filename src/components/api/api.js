function loadTodo(getJson) {
    fetch('http://192.168.0.5:8080/api/todo/all?delay=2')
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

export {loadTodo}