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
    justifyContent: 'space-around',
    alignItems: 'center',
    direction: 'row',
    backgroundColor: '#2C2C2C',
    color: '#fff',
    fontWeight: 'bold'
  }
}

function Menu(props) {

  const { classes } = props;

  return (
    <React.Fragment>
      <Grid
        className={classes.header}
        container
      >
        <Grid>
          Все права защищены
        </Grid>
        <Grid>
          <IconButton title='Мари-маркет'>
            <img src={logo} alt="" />
          </IconButton>
        </Grid>
        <Grid>
          +7(999)708 11 99
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default withStyles(styles)(Menu);