// components/AddTask.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../actions';

const AddTask = () => {
    const [newTask, setNewTask] = useState('');
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (newTask.trim() !== '') {
            dispatch(addTask(newTask));
            setNewTask('');
        }
    };

    return (
        <div style={{ marginBottom: '20px', display: 'flex' }}>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a new task"
                style={{ marginRight: '10px', padding: '8px', flex: '1' }}
            />
            <button onClick={handleAdd} style={{ padding: '8px', backgroundColor: 'bleue', color: 'bleue', border: 'none', cursor: 'pointer' }}>
                Add Task
            </button>
        </div>
    );
};

export default AddTask;