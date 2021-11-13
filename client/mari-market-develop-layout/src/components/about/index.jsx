import React from "react";

import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import AboutImg from '../../assets/image/img.png';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e0dcdc',
    height: '100%'
  },
  img: {
    backgroundColor: 'rgba(200, 193, 61, 0.2)',
    borderRadius: '50%'
  },
  demand: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    padding: '130px'
  }
}


function Info(props) {

  const { classes } = props;

  return (
    <Box className={classes.root}>
      <div className={classes.img}>
        <img src={AboutImg} />
      </div>
      <div className={classes.demand}>
        <Typography variant="h3" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
          О маркетплейсе
        </Typography>
        <Typography subtitle="h2" style={{ 'color': '#01392B', 'font-weight': 'bold', 'margin-bottom': '20px' }}>
          Мы радуем жителей республики Марий Эл вкусными и качественнымии продуктами питания. У нас вы найдете олько самые
          свежие и вкусные продукты.
        </Typography>
        <Typography subtitle="h2" style={{ 'color': '#01392B', 'font-weight': 'bold', 'margin-bottom': '20px' }}>
          Мы гордимся тем, что работаем в республике Марий Эл, и тепло относится к каждому покупателю. Заходите к нам
          и выбирайте продукты, которые вам по душе!
        </Typography>
      </div>
    </Box>
  );
}

export default withStyles(styles)(Info);