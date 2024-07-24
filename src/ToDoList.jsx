import { TodoItem } from "./Todoitem"

export function ToDoList({todos, toggleTodo, handleDelete}) {
  return (
    <ul id="todo-list">
    {todos.length === 0 && (<p id="nothing-todo">Nothing to do...</p>)}
      {todos.map(todo => {
        return (
          <TodoItem
            {...todo}
            key={todo.id}
            toggleTodo={toggleTodo}
            handleDelete={handleDelete}
          />
        )
      })}
    </ul>
  );
}