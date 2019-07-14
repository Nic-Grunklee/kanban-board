import React, { useState, createContext } from 'react';

export const TaskContext = createContext();

export const TaskProvider = props => {
  const [tasks, setTasks] = useState([
    {
      name: 'Create App',
      id: 1,
    },
    {
      name: 'Build App',
      id: 2,
    },
    {
      name: 'Release App',
      id: 3,
    },
  ]);

  return <TaskContext.Provider value={[tasks, setTasks]}>{props.children}</TaskContext.Provider>;
};
