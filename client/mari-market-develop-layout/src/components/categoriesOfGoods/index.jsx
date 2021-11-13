import React from "react";

import { withStyles } from '@mui/styles';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Grid from '@mui/material/Grid';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import greens from '../../assets/image/goods/greens.png';
import bread from '../../assets/image/goods/bread.png';
import cheese from '../../assets/image/goods/cheese.png';
import honey from '../../assets/image/goods/honey.png';
import apple from '../../assets/image/goods/apple.png';
import egg from '../../assets/image/goods/egg.png';
import meat from '../../assets/image/goods/meat.png';
import pattern from '../../assets/image/goods/Group_12.svg';


const styles = {
  root: {
    backgroundColor: '#e0dcdc',
    padding: '48px'
  },
  title: {
    color: '#01392B',
    textAlign: 'center'
  },
  grid: {
    marginTop: '48px'
  },
  gridItem: {
    display: 'flex',
    position: 'relative',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  },
  bottomBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '90%',
    bottom: 10,
    backgroundColor: 'transparent'
  }
}

const itemData = [
  {
    img: greens,
    title: 'Овощи',
    link: '',
    xs: 3,
    bgColor: '#fff',
    color: "#000"
  },
  {
    img: bread,
    title: 'Хлеб и выпечка',
    link: '',
    xs: 3,
    bgColor: '#2C2C2C',
    color: "#fff"
  },
  {
    img: cheese,
    title: 'Сыры',
    link: '',
    xs: 3,
    bgColor: '#fff',
    color: "#000"
  },
  {
    img: honey,
    title: 'Мед',
    link: '',
    xs: 3,
    bgColor: '#01392B',
    color: "#fff"
  },
  {
    img: apple,
    title: 'Фрукты',
    link: '',
    xs: 3,
    bgColor: '#fff',
    color: "#000"
  },
  {
    img: egg,
    title: 'Яйца и молочные продукты',
    link: '',
    xs: 6,
    bgColor: '#2C2C2C',
    color: "#fff"
  },
  {
    img: meat,
    title: 'Мясо',
    link: '',
    xs: 3,
    bgColor: '#fff',
    color: "#000"
  },
];

function CategoriesOfGoods(props) {

  const { classes } = props;

  return (
    <Box className={classes.root}>
      <Typography className={classes.title} style={{ 'font-weight': 'bold' }} variant="h3">
        Категории товаров
      </Typography>
      <Grid style={{ 'margin-top': `48px` }} container spacing={2}>
        {itemData.map((item) =>
          <Grid item xs={item.xs}>
            <Paper className={classes.gridItem} style={{ 'backgroundColor': `${item.bgColor}` }}>
              <ImageListItem>
                <img src={item.img} />
              </ImageListItem>
              <div className={classes.bottomBar}>
                <div style={{ 'color': `${item.color}`, 'font-weight': 'bold' }}>{item.title}</div>
                <IconButton style={{ 'color': '#fff', 'backgroundColor': '#D74E00' }}>
                  <ArrowRightAltIcon />
                </IconButton>
              </div>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default withStyles(styles)(CategoriesOfGoods);