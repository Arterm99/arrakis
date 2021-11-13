import React from "react";

import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import brok from '../../assets/image/goods/brok.png';


const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
    padding: '48px',
    paddingBottom: '98px'
  },
  img: {
    backgroundColor: 'rgba(200, 193, 61, 0.1)',
    backdropFilter: 'blur(100px)',
    borderRadius: '50%'
  },
  demand: {
    marginLeft: '100px'
  }
}


function Demand(props) {

  const { classes } = props;

  return (
    <Box className={classes.root}>
      <div className={classes.img} style={{ 'backdrop-filter': 'blur(100px)' }}>
        <img src={brok} />
      </div>
      <div className={classes.demand}>
        <Typography variant="h3" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
          Ищете что-то особенное?
        </Typography>
        <Typography subtitle="h2" style={{ 'color': '#01392B', 'font-weight': 'bold', 'margin-bottom': '20px' }}>
          Отправьте нам запрос на интересующий вас продукт, и мы передадим его напрямую сотням фермеров в республике Марий Эл
        </Typography>
        <Button variant="contained" style={{ 'backgroundColor': '#D74E00', 'color': '#fff' }}>Оставить заказ</Button>
      </div>
    </Box>
  );
}

export default withStyles(styles)(Demand);