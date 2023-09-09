import "./ToDoList.css";
import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import Header from "../components/Header";

// Functional component for the To Do List Container
function ToDoListContainer() {
  // Initialize the state of tasks
  function initTasks() {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  }

  // Call the initTasks function
  const [tasks, setTasks] = useState(initTasks());

  // Use effect to save the tasks
  useEffect(() => {
    // Convert to a JSON string
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Function to add a task
  function addTask(text) {
    const newTask = { text, completed: false };
    setTasks([...tasks, newTask]);
  }

  // Delete Task, with index arg.
  function deleteTask(index) {
    const newList = [...tasks];
    newList.splice(index, 1);
    setTasks(newList);
  }

  // Mark as complete
  function markComplete(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed; // Change the completed state (true/false)
    setTasks(updatedTasks);
  }

  // Mark all as completed
  const markAllCompleted = () => {
    const updatedTasks = tasks.map((task) => {
      return { ...task, completed: true };
    });
    setTasks(updatedTasks);
  };

  // Return the container
  return (
    <div className="ToDoContainer">
      {/* To do list */}
      <Header title="To Do List" className="Header" />
      <TaskForm addTask={addTask} />
      {/* Button to mark all tasks as completed */}
      <button onClick={markAllCompleted}>
        <span class="material-symbols-outlined mark-completed-all">
          check_circle
        </span>{" "}
        <p className="mark-completed-all">Mark All</p>
      </button>
      {/* Button to delete all the tasks */}
      <button onClick={() => setTasks([])}>
        <span class="material-symbols-outlined delete-all">
          delete_forever
        </span>{" "}
        <p className="delete-all">Delete All</p>
      </button>
      {/* Task list */}
      <ul className="ToDoElementsList">
        {/* Map through the tasks */}
        {tasks.map((task, index) => (
          <li key={index} className="task-item">
            <span className="task-text">{task.text}</span>
            <button onClick={() => deleteTask(index)}>
              <span className="material-symbols-outlined icon delete-icon">
                delete
              </span>
            </button>
            <button onClick={() => markComplete(index)}>
              {task.completed ? (
                <span className="material-symbols-outlined icon completed-icon">
                  done_all
                </span>
              ) : (
                <span className="material-symbols-outlined icon backspace-icon">
                  backspace
                </span>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Export the container
export default ToDoListContainer;
