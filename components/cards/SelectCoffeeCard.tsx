import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { ISelectCoffee } from '../../types';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles(theme => ({
  image: {
    width: '100%',
    height: 'auto',
    maxHeight: '100%',
    maxWidth: '280px'
  },
  imgContainer: {
    width: '100%',

  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'start',
    justifyContent: 'start',

  },
  description: {
    color: 'black',
    fontSize: '15px',
    paddingTop: theme.spacing(1),
    letterSpacing: theme.spacing(1),
    fontWeight: 400
  },
  link: {
    paddingTop: theme.spacing(3),
    color: theme.palette.secondary.main,
    fontSize: '14px',
    fontWeight: 100,
    letterSpacing: '2px',
    '& > div': {
      height: '1px',
      backgroundColor: theme.palette.secondary.main

    },
    '&:hover': {
      color: theme.palette.secondary.main,
      '& > div': {
        backgroundColor: theme.palette.secondary.main
      }
    }
  },

}))

interface IProps {
  data: ISelectCoffee;
}
function SelectCoffeeCard({ data }: IProps) {

  const getImageUrl = (id: string) => `https://s00380pcdnspwesteurope-sirencatalog.azureedge.net/sirencatalog/CoffeeDetail_CoffeeCard_${id}_1100x1100.jpg`
  const classes = useStyles();
  return <Grid item xs={4} className={classes.container}>
    <div className={classes.imgContainer}>
      <img
        src={getImageUrl(data.id)}
        className={classes.image}
      />
    </div>
    <div className={classes.description}>
      {data.name}
    </div>
    <NavLink path={`/coffee/${data.id}`} label={'LEARN MORE'} className={classes.link} />

  </Grid>
}

export default SelectCoffeeCard;