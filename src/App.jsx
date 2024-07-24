import { useState } from 'react'
import './App.css'
import './index.css'

function App() {
  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!newItem) return
    
    setTodos(currentTodos => {
      return [
      ...currentTodos, 
      {id: crypto.randomUUID(), title: newItem, complete: false }
      ]
    })

    setNewItem('')
  }

  const handleDelete = (id) => {

    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })

  }

  const toggleTodo = (id, completed) => {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, complete: completed }
        }
        return todo
      })
    })
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="App">

        <h1 id='title'>Todo List</h1>

        <div className='form-row'>
          <label htmlFor="new-todo-item">What needs to be done?</label>
          <input
            value={newItem}
            onChange={ e => setNewItem(e.target.value) }
            type="text" 
            id="new-todo-item" />
          <button className='add-btn'>Add</button>
        </div>
        
        <h2>Things To Do</h2>
        {todos.length === 0 && <p>Nothing to do...</p>}
        {todos.length === 0 && <div id="loader"><div id="box"></div><div id="hill"></div></div>}
        <ul id="todo-list">
          {todos.map(todo => {
              return ( 
                <li key={todo.id}>
                  <label>
                    <input 
                      type="checkbox" 
                      checked={todo.complete}
                      onChange={e => toggleTodo(todo.id, e.target.checked)} />
                    {todo.title}
                  </label>
                  <button onClick={() => handleDelete(todo.id)} className='delete'>Delete</button>
                </li>
              )
            })}
        </ul>

      </form>
    </>
  )
}

export default App
