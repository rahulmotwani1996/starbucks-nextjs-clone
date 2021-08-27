import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { IRoastery } from '../../types';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles(theme => ({
    image:  {
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        objectFit: 'cover',
        [theme.breakpoints.down('md')]: {
          width: '200px',
          height: '200px'

        }
      },
      imgContainer: {
        width: '100%',
        flexGrow: 1,
        textAlign: 'center',
      },
      container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      place: {
        color: theme.palette.secondary.main,
       textAlign: 'center',
        fontWeight: 800,
        margin: '16px 0px',
        fontSize: '14px'
      }
      
}))

interface IProps {
  data: IRoastery;

}
function RoasteryCard({data}: IProps) {
    const classes  = useStyles();
    return <Grid item xs={12} sm={6} md={4} className={classes.container}>
    <div className={classes.imgContainer}>
      <img
        src={`https://content-prod-live.cert.starbucks.com/binary/v2/asset/${data.id}.jpg`}
        className={classes.image}
      />
    </div>
    <div className={classes.place}>
      {data.label}
    </div>
  
      
  </Grid>
}

export default RoasteryCard;