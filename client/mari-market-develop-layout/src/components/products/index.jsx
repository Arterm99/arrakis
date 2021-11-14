import React from "react";

import { useSelector } from 'react-redux';
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';

import Menu from './menu';
import Search from './search';
import Card from './card';

const styles = {
  root: {
    display: 'flex',
    backgroundColor: '#e0dcdc',
    padding: '48px'
  },
  title: {
    color: '#01392B',
    textAlign: 'center'
  },
  gridItem: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  secondBlock: {
    width: '100%',
    marginLeft: '10px',
    marginTop: '40px'
  }
}


function Products(props) {
  const { items, isLoaded, selectCategory, searchText } = useSelector(({ goods }) => goods);
  console.log(items)

  const { classes } = props;

  return (
    <Box className={classes.root}>
      <div>
        <Menu />
      </div>
      <div className={classes.secondBlock}>
        <Search />
        <div>
          {items.map((item) =>
            <Card
              img={item.profile_image}
            />
          )}
        </div>
      </div>
    </Box>
  );
}

export default withStyles(styles)(Products);