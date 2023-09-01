import React from 'react';
import { useState } from 'react';


//variable de estado de una tarea
const [task, setTask] = useState('');

//añadir tareas
function addTask(newTask){
    setTask([...task, newTask]);
}

<ul>
  {tasks.map((task, index) => (
    <li key={index}>{task}</li>
  ))}
</ul>