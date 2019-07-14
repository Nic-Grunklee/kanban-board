import React, {useState, createContext} from 'react';

export const BoardContext = createContext();

export const BoardProvider = props => {
  const [columns, setColumns] = useState([
    {
      title: 'Todo',
      id: 1,
    },
    {
      title: 'In Progress',
      id: 2,
    },
    {
      title: 'Done',
      id: 3,
    },
  ]);

  return (
    <BoardContext.Provider value={[columns, setColumns]}>{props.children}</BoardContext.Provider>
  );
};
