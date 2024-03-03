// components/ListTask.js
import React from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = ({ filter }) => {
    const tasks = useSelector(state => {
        if (filter === 'all') {
            return state.tasks;
        } else {
            return state.tasks.filter(task => task.isDone === (filter === 'done'));
        }
    });

    return (
        <div>
            {tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
        </div>
    );
};

export default ListTask;