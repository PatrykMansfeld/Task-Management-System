import React, { useState } from 'react';

function AddTask() {
    const [task, setTask] = useState('');

    const handleInputChange = (e) => {
        setTask(e.target.value);
    };

    const handleAddTask = () => {
        if (task.trim() === '') {
            alert('Task cannot be empty');
            return;
        }

        const existingTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        const updatedTasks = [...existingTasks, task];
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        setTask('');
        alert('Task added successfully!');
    };

    return (
        <div>
            <h2>Add Task</h2>
            <input
                type="text"
                value={task}
                onChange={handleInputChange}
                placeholder="Enter a task"
            />
            <button onClick={handleAddTask}>Add Task</button>
        </div>
    );
}

export default AddTask;