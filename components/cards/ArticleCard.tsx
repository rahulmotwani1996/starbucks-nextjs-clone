import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { IArticle } from '../../types';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles(theme => ({
    image:  {
        width: '100%',
        height: '100%',
        minHeight: '300px',
        objectFit: 'cover'
        
        
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
        color: theme.palette.primary.main,
        fontSize: '20px',
        paddingTop: theme.spacing(1),
        letterSpacing: theme.spacing(1),
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
          fontSize: '16px',

        }
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
      imgCaption: {
          fontStyle: 'italic',
          fontWeight: 500, 
          fontSize: '12px'
      }
      
}))

interface IProps {
  data: IArticle;
}
function ArticleCard({data}: IProps) {
    const classes  = useStyles();
    return <Grid item xs={12} sm={6} md={4} className={classes.container}>
    <div className={classes.imgContainer}>
      <img
        src={`https://content-prod-live.cert.starbucks.com/binary/v2/asset/${data.id}.png`}
        className={classes.image}
      />
    </div>
    <Typography className={classes.imgCaption}>{data.imageCaption}</Typography>
    <div className={classes.description}>
      {data.title}
    </div>
    <NavLink path="/" label={'READ MORE'} className={classes.link}/>
      
  </Grid>
}

export default ArticleCard;