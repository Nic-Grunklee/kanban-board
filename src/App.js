import React from 'react';
import './App.css';
import Board from './components/board/Board.js';
import {BoardProvider} from './BoardContext';

function App() {
  return (
    <div className="App">
      <BoardProvider>
        <Board />
      </BoardProvider>
    </div>
  );
}

export default App;
