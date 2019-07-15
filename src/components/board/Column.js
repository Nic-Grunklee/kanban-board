import React, {useContext} from 'react';
import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';
import {TaskContext} from '../../TaskContext';
import './column.scss';
import classNames from 'classnames';

const Column = ({title}) => {
  const [tasks, setTasks] = useContext(TaskContext);

  const className = classNames({
    todo: title === 'Todo',
    'in-progress': title === 'In Progress',
    done: title === 'Done',
    titles: true,
  });

  return (
    <Card>
      <CardContent>
        <Typography component="h2" className={className}>
          {title}
        </Typography>
        {tasks
          .filter(task => task.status === title)
          .map(item => (
            <Card key={item.id}>{item.name}</Card>
          ))}
      </CardContent>
    </Card>
  );
};

export default Column;
