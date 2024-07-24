import { useState } from "react";

export function Form({ onSubmit }) {
  const [newItem, setNewItem] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Handling submit');

    if (newItem === '') return;

    onSubmit(newItem);

    setNewItem('');
  }

  return (
    <form onSubmit={handleSubmit} className="App">
    <div className='form-row'>
      <label htmlFor="new-todo-item">What needs to be done?</label>
      <input
        value={newItem}
        onChange={ e => setNewItem(e.target.value) }
        type="text" 
        id="new-todo-item" 
      />
    </div>
      <button className='add-btn'>Add</button>
  </form>
  );
}