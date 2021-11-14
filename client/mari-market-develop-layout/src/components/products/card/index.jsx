import React from "react";

import { withStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import tr from '../../../assets/image/images/maZeKF5qi1H7ezMWBsbqCp6ukPiguR3V4sui96sm.png'
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
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px'
  }
}

function CardItem(props) {

  const {
    img,
    company,
    productName,
    price,
    classes
  } = props;

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        src={require(`../../../assets/image/${img}`).default}
        height="325"
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" style={{ color: '#01392B' }}>
          {productName}
        </Typography>
        <Typography variant="body2" color="orange">
          {company}
        </Typography>
      </CardContent>
      <div className={classes.footerCard}>
        <Typography gutterBottom variant="h5" component="div">
          {`${price} ₽`}
        </Typography>
        <Button variant="contained" style={{ 'backgroundColor': '#D74E00', 'color': '#fff' }}>В корзину</Button>
      </div>
    </Card>
  );
}

export default withStyles(styles)(CardItem);