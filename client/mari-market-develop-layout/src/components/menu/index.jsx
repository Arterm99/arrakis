import React from "react";

import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';

import logo from '../../assets/image/logo.svg';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    direction: 'row',
    padding: '0 4%',
    marginBottom: '46px',
    color: '#ffffff'
  },
  menuLinks: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'row',
    '& button': {
      color: '#fff',
      margin: '0 20px'
    }
  },
  menuButtons: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    direction: 'row',
    '& button': {
      color: '#fff',
      backgroundColor: '#c4c4c4',
      margin: '8px'
    }
  }
}

function Menu(props) {

  const { isFilled, classes } = props;

  return (
    <React.Fragment>
      <Grid
        className={classes.header}
        style={{ backgroundColor: isFilled ? '#01392B' : 'none'}}
        container
      >
        <Grid>
          <IconButton title='Мари-маркет'>
            <img src={logo} alt="" />
          </IconButton>
        </Grid>
        <Grid className={classes.menuLinks}>
          <Button>Продукты</Button>
          <Button>Фермеры</Button>
          <Button>Доставка</Button>
          <Button>Контакты</Button>
          <Button>Стать продавцом</Button>
        </Grid>
        <Grid className={classes.menuButtons}>
          <Tooltip title="Аккаунт">
            <IconButton >
              <PersonOutlineIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Корзина">
            <IconButton >
              <ShoppingCartIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Menu);