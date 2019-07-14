import React from 'react';
import './App.css';
import Board from './Board.js';
import { TaskProvider } from './TaskContext';

function App() {
  return (
    <div className='App'>
      <TaskProvider>
        <Board />
      </TaskProvider>
    </div>
  );
}

export default App;
