export function TodoItem({ completed, id, title, toggleTodo, handleDelete }) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button onClick={() => handleDelete(id)} className="delete">
        Delete
      </button>
    </li>
  )
}