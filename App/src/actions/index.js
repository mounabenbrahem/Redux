// actions/index.js
export const addTask = (description) => ({
    type: 'ADD_TASK',
    payload: { description, isDone: false },
});

export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK',
    payload: id,
});

export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
});

export const editTask = (id, description) => ({
    type: 'EDIT_TASK',
    payload: { id, description },
});