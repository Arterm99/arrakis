import React from "react";

import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Menu from '../menu';

import bgImg from '../../assets/image/imf_fon.png';
import imgHoney from '../../assets/image/img_honey.png'

const styles = {
  root: {
    backgroundImage: `url(${bgImg})`,
    height: '796px',
    overflow: 'hidden',
    position: 'relative'
  },
  rightSideBlock: {
    backgroundColor: '#c8c13d',
    position: 'absolute',
    right: 0,
    padding: '100px',
    width: '354px',
    height: '570px'
  },
  leftSideBlock: {
    position: 'absolute',
    left: 0,
    padding: '100px',
    width: '700px',
    height: '570px'
  },
  honey: {
    position: 'absolute',
    right: 0,
    bottom: -70
  }
}

function Header(props) {

  const { classes } = props;

  return (
    <React.Fragment>
      <Box className={classes.root}>
       <Menu />
        <Box className={classes.leftSideBlock}>
          <Typography variant="h3" style={{ 'color': '#fff', 'margin-bottom': '28px', 'font-weight': 'bold' }}>
            Натуральная фермерская продукция родного края
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" style={{ 'backgroundColor': '#c8c13d', 'color': '#01392B' }}>Найти фермера</Button>
            <Button variant="outlined" style={{ 'color': '#fff' }}>Перейти в каталог</Button>
          </Stack>
        </Box>
        <Box className={classes.rightSideBlock}>
          <Typography variant="h4" style={{ 'color': '#fff', 'margin-bottom': '14px' }}>
            Успейти купить!
          </Typography>
          <Typography variant="h4" style={{ 'color': '#01392B' }}>
            Акция на липтовый мед из Марий Эл!
          </Typography>
        </Box>
        <div className={classes.honey}>
          <img src={imgHoney} />
        </div>
      </Box>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);