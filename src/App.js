import React,{useState} from 'react'
import Todos from './Todos';
import AddForm from './AddForm'
import shortid from 'shortid'
const App = () => {
  const [todos, setTodos]= useState([
    {id:1 ,content: 'Have a job'},
    {id:2, content: 'Play LOL'}
  ])
  // const [todos, setTodos] = useState([]);

  const deleteTodoHandler = (id) => {
    console.log(id)
    const todosFilter = todos.filter((todo) => {
        return todo.id !== id 
    })
    console.log(todosFilter)
    setTodos( todosFilter)
  }
  const addTodo = (todo,id) => {
    // const  id = shortid.generate();  
    // const newTodo = [... todos, {id:id,content: todo}];
    const todosCopied = [... todos];
    const newTodo = {id: id, content: todo}
    todosCopied.push(newTodo);
    setTodos(todosCopied)
    console.log(todo,id)
  }
  return (
    <div className="todo-app container ">
      <h1 className="center blue-text">
        Todo's
      </h1>
      <AddForm addTodo={addTodo}/>
      <Todos todos={todos} deleteTodo={deleteTodoHandler}/>
    </div>
  )
}

export default App
