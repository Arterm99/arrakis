import React from "react";

import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const styles = {
  root: {
    width: '416px',
    borderRadius: '20px',
    overflow: 'hidden',
    position: 'relative'
  },
  list: {
    borderRadius: '20px',
    color: '#fff',
    paddingLeft: '80px',
    backgroundColor: '#01392B'
  },
  listItem: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  listTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '20px'
  }
}

function CardItem(props) {

  const { classes } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        height="325"
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color: '#01392B' }}>
          Lizard
        </Typography>
        <Typography variant="body2" color="orange">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        
      </CardActions>
    </Card>
  );
}

export default withStyles(styles)(CardItem);