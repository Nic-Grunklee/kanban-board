import React, {useContext} from 'react';
import {BoardContext} from '../../BoardContext';
import './board.scss';
import Column from './Column';
import {TaskProvider} from '../../TaskContext';

const Board = () => {
  const [columns, setColumns] = useContext(BoardContext);

  return (
    <div className="row">
      {columns.map(column => (
        <div className="column" key={column.id}>
          <TaskProvider>
            <Column title={column.title}></Column>
          </TaskProvider>
        </div>
      ))}
    </div>
  );
};

export default Board;
