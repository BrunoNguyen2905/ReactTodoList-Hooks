import React from 'react'

const Todo = ({ todos,deleteTodo }) => {
    const todoList = todos.length ? (
        <ul>
            {
                todos.map(todo => ( 
                    <li key={todo.id} className="collection-item" >
                        <h5 onClick={() => deleteTodo(todo.id)}>{todo.content}</h5>  {/*deleteTodo(todo.id) will automatically invoke the func cause parenthesis invoke the func => need to wrap in anoymous func, which will be an arrow function*/}
                    </li>
                ))
            }
        </ul>
    ) : (<h2 className="center"> You don't have anything to do today!!!</h2>)

    return (
        <div className="todos collection">
            {todoList}
            
        </div>

    )
}

export default Todo
