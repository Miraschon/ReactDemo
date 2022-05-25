function TodoPage() {
    const todoList = ['Item 1', 'Item 2', 'Item 3']

    return <div>
        <h1>TodoPage</h1>
        <ul>
            {todoList.map((item, idx) => (
                <li>
                    {idx+1}. {item}
                </li>
            ))}
        </ul>
    </div>
}

export default TodoPage;
