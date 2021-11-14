import React from "react";

import { withStyles } from '@mui/styles';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
  root: {
    height: '796px',
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

const products =
  [
    "Национальные блюда",
    "Яйца и молочные продукты",
    "Сыры",
    "Овощи и фрукты",
    "Мясо",
    "Колбасные изделия",
    "Масла и соусы",
    "Хлеб и выпечка",
    "Сладости"
  ]

function Menu(props) {

  const { classes } = props;

  return (
    <List
      className={classes.list}
      sx={{ width: '100%', maxWidth: 340 }}
      component="nav"
    >
      <div className={classes.listTitle}>
        Все продукты
      </div>
      {products.map((product, index) =>
        <ListItemButton key={index} className={classes.listItem}>
          <ListItemText primary={`${product}`} />
          <ListItemIcon style={{ color: '#fff' }}>
            <ArrowForwardIosIcon />
          </ListItemIcon>
        </ListItemButton>
      )}
    </List>
  );
}

export default withStyles(styles)(Menu);