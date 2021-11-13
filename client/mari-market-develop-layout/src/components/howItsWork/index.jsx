import React from "react";

import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Ellipse1 from '../../assets/image/howItsWork/Ellipse1.png';
import Ellipse2 from '../../assets/image/howItsWork/Ellipse2.png';
import Ellipse3 from '../../assets/image/howItsWork/Ellipse3.png';


const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
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
  steps: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    '& div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      maxWidth: '400px'
    }
  }
}


function Demand(props) {

  const { classes } = props;

  return (
    <Box className={classes.root}>
      <div>
        <Typography variant="h3" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
          Как это работает?
        </Typography>
        <Typography subtitle="h2" style={{ 'color': '#01392B', 'font-weight': 'bold', 'margin-bottom': '20px' }}>
          Всего три шага к фермерской продукции
        </Typography>
      </div>

      <div className={classes.steps}>
        <div>
          <img src={Ellipse1} alt="" />
          <div>
            <Typography variant="h5" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
              Выбрать фермера
            </Typography>
            <Typography variant="h6">
              Выбирайте продукты у фермера и собирайте у него заказ
            </Typography>
          </div>
        </div>
        <div>
          <img src={Ellipse2} alt="" />
          <div>
            <Typography variant="h5" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
              Оплатить
            </Typography>
            <Typography variant="h6">
              У нас доступны все виды оплаты и способы доставки по всей России
            </Typography>
          </div>
        </div>
        <div>
          <img src={Ellipse3} alt="" />
          <div>
            <Typography variant="h5" style={{ 'color': '#01392B', 'margin-bottom': '14px', 'font-weight': 'bold' }}>
              Получить продукцию
            </Typography>
            <Typography variant="h6">
              Все продукты доставляются от фермера до вас в указанные сроки
            </Typography>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default withStyles(styles)(Demand);