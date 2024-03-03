// components/App.js
import React, { useState } from 'react';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  const [filter, setFilter] = useState('all');

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>To Do Application </h1>
      <div style={filterContainerStyle}>
        <button onClick={() => handleFilterChange('all')} style={filterButtonStyle(filter === 'all')}>All</button>
        <button onClick={() => handleFilterChange('done')} style={filterButtonStyle(filter === 'done')}>Done</button>
        <button onClick={() => handleFilterChange('notDone')} style={filterButtonStyle(filter === 'notDone')}>Not Done</button>
      </div>
      <AddTask />
      <ListTask filter={filter} />
    </div>
  );
}

const containerStyle = {
  maxWidth: '600px',
  margin: 'auto',
  padding: '20px',
  fontFamily: 'Arial, sans-serif',
};

const titleStyle = {
  fontSize: '36px',
  textAlign: 'center',
  marginBottom: '60px',
  color: '#007bff',
};

const filterContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '20px',
};

const filterButtonStyle = (isActive) => ({
  padding: '10px 20px',
  margin: '0 5px',
  fontSize: '16px',
  backgroundColor: isActive ? '#007bff' : '#eee',
  color: isActive ? '#fff' : '#333',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
});

export default App;