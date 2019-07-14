import React, {useContext} from 'react';
import {BoardContext} from '../../BoardContext';
import './board.scss';
import Column from './Column';

const Board = () => {
  const [columns, setColumns] = useContext(BoardContext);

  return (
    <div class="row">
      {columns.map(column => (
        <div class="column">
          <Column title={column.title}></Column>
        </div>
      ))}
    </div>
  );
};

export default Board;
