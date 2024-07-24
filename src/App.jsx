import { useState, useEffect } from 'react'
import './App.css'
import './index.css'
import { Header } from './Header'
import { Form } from './Form'
import { ToDoList } from './ToDoList'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  });

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  function toggleTodo (id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }

        return todo
      })
    })
  }

  function handleDelete(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }


  return (
    <>
      <Header />

      <Form onSubmit={addTodo} />
      <h2>Things To Do</h2>
      {/* {todos.length === 0 && (<p id="nothing-todo">Nothing to do...</p>)} */}
      <ToDoList todos={todos} toggleTodo={toggleTodo} handleDelete={handleDelete} />
    </>
  )
}

export default App
