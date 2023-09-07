import "./ToDoList.css";
import React, {useState, useEffect} from "react";
import TaskForm from "./TaskForm";
import Header from "../components/Header";

//functional component for the To Do List Container
function ToDoListContainer(){

    //inicializar el estado de task 
    function initTasks() {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
          return JSON.parse(savedTasks);
        } else {
          return [];
        }
      }

    //callt the initTasks function
    const [tasks, setTasks] = useState(initTasks());

    //useas effect to save the tasks
    useEffect(() => {
        //convert in a JSON string
        localStorage.setItem("tasks", JSON.stringify(tasks));
        }, [tasks]);

    //delete Task, with index arg. 
    function deleteTask(index){
    const newList = [...task];
    newList.splice(index, 1);
    setTask(newList);}
        
    //mark as complete
    function markComplete(index) {
        const updatedTasks = [...task];
        updatedTasks[index].completed = !updatedTasks[index].completed; // Cambia el estado de completado (true/false)
        setTask(updatedTasks);
      }
      


    
    //return the container
    return(
        <div className="ToDoContainer"> 
            {/* To do list */}
            <Header title="To Do List"  className="Header"/>   
            <TaskForm addTask={addTask} />
            {/* Task list */}
            <ul className="ToDoElementsList">
                {/* Map through the tasks */}
                {task.map((task, index) => (
                <li key={index}>
                    {task.text}
                    <button onClick={() => deleteTask(index)}>Delete</button>
                    {/* //square to mark as complete */}
                    <button onClick={() => markComplete(index)}>
                        {task.completed ? "Incomplete" : "Complete"}
                    </button>
                </li>
                 ))}

                
            </ul>

           

        </div>
    );
                }






//export the container
export default ToDoListContainer;