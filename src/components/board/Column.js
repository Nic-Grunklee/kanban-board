import React from 'react';
import Card from '@material-ui/core/Card';
import {CardContent, Typography} from '@material-ui/core';

const Column = ({title}) => {
  return (
    <Card>
      <CardContent>
        <Typography component="h2">{title}</Typography>
      </CardContent>
    </Card>
  );
};

export default Column;
