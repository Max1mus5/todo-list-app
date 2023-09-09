import React, { useState } from 'react';

// Formulario para escribir y añadir tareas
const TaskForm = ({ addTask }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTask(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit} className='form form-container'>
      <input
        type="text"
        className={`input`}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

export default TaskForm;
