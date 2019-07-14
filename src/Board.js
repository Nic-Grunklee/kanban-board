import React, { useContext } from 'react';
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';
import { TaskContext } from './TaskContext';

const Board = () => {
  const [tasks, setTasks] = useContext(TaskContext);

  return (
    <Card>
      <CardContent>
        {tasks.map(task => (
          <Card key={task.id}>
            <CardContent>
              <Typography component='h2'>{task.name}</Typography>
            </CardContent>
          </Card>
        ))}
      </CardContent>
    </Card>
  );
};

export default Board;
