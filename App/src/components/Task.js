// components/Task.js
import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../actions';

const Task = ({ task }) => {
    const dispatch = useDispatch();

    return (
        <div style={taskStyle}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textDecoration: task.isDone ? 'line-through' : 'none', flex: '1' }}>{task.description}</div>
                <div style={statusStyle(task.isDone)}>
                    {task.isDone ? 'Done' : 'Not Done'}
                </div>
                <div>
                    <button onClick={() => dispatch(toggleTask(task.id))} style={buttonStyle}>
                        {task.isDone ? 'Undo' : 'Done'}
                    </button>
                    <button onClick={() => dispatch(editTask(task.id, prompt('Edit task:', task.description)))} style={buttonStyle}>
                        Edit
                    </button>
                    <button onClick={() => dispatch(deleteTask(task.id))} style={{ ...buttonStyle, color: 'red' }}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const taskStyle = {
    marginBottom: '10px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#fff',
};

const buttonStyle = {
    padding: '8px',
    marginRight: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
};

const statusStyle = (isDone) => ({
    padding: '8px',
    marginLeft: '10px',
    color: isDone ? 'green' : 'orange',
    border: `1px solid ${isDone ? 'green' : 'orange'}`,
    borderRadius: '5px',
});

export default Task;