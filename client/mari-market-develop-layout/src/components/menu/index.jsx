import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { setRoute } from '../../redux/actions/route';

import { withStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

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
    },
    '& a': {
      width: '150px',
      color: '#fff',
      textDecoration: 'none'
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
  const dispatch = useDispatch();
  const { route } = useSelector(({ route }) => route);

  const handlerClick = (route) => {
    return dispatch(setRoute(route))
  }

  const handlerClickOnAccBtn = () =>
  {
    handlerClick('/');
    window.location.href = 'https://crotone.000webhostapp.com/';
  }

  const { 
    isFilled, 
    classes 
  } = props;

  return (
    <React.Fragment>
      <Grid
        className={classes.header}
        style={isFilled ? { backgroundColor: '#01392B', 'margin-bottom': 0 } : null}
        container
      >
        <Grid>
          <Link onClick={() => handlerClick('/')} to="/">
            <IconButton title='Мари-маркет'>
              <img src={logo} alt="" />
            </IconButton>
          </Link>
        </Grid>
        <Grid className={classes.menuLinks}>
          <Link onClick={() => handlerClick('catalog')} to="/catalog" style={route === 'catalog' ? { 'color': '#5e755d' } : null}>Продукты</Link>
          <Link to="/">Фермеры</Link>
          <Link to="/">Доставка</Link>
          <Link to="/">Контакты</Link>
          <Link to="/">Стать продавцом</Link>
        </Grid>
        <Grid className={classes.menuButtons}>
          <Tooltip title="Аккаунт">
            <IconButton onClick={handlerClickOnAccBtn}>
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
    </React.Fragment >
  );
}

export default withStyles(styles)(Menu);