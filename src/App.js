import React, { useState } from "react";
import "./App.css";
import NewTask from "./components/NewTask";
import TasksList from "./components/TasksList";
const {log} = console;

export default function App() {
    // hook your code up here ;)
    const [newTask, setNewTask] = useState({});
    const [allTasks, setAllTasks] = useState([]);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setNewTask((prevNewTask) => ({
            ...prevNewTask,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        setAllTasks((prevTasks) => {
            return [...prevTasks, {
                ...newTask,
                id: Math.random()
            }]
        });
        event.preventDefault();
    };

    const handleDelete = (idToRemove) =>
        setAllTasks((prevTasks) =>{
            log(prevTasks)
            return prevTasks.filter((item, index, arr) => item.id !== idToRemove)
        });

    return (
        <main>
            <h1>Tasks</h1>
            <NewTask
                newTask={newTask}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            <TasksList allTasks={allTasks} handleDelete={handleDelete} />
        </main>
    );
}
