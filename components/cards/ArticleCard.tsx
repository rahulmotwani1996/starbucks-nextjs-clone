import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { IArticle } from '../../types';
import NavLink from '../NavLink/NavLink';
import CommonPostCard from './CommonPostCard';

const useStyles = makeStyles(theme => ({
    image:  {
        minHeight: '300px',
        height: '100%',
        objectFit:'cover'
        
        
      },
      
  
}))

interface IProps {
  data: IArticle;
}
function ArticleCard({data}: IProps) {
    const classes  = useStyles();
    return <Grid item xs={12} sm={6} md={4}>
    {/* <div className={classes.imgContainer}>
      <img
        src={`https://content-prod-live.cert.starbucks.com/binary/v2/asset/${data.id}.png`}
        className={classes.image}
      />
    </div>
    <Typography className={classes.imgCaption}>{data.imageCaption}</Typography>
    <div className={classes.description}>
      {data.title}
    </div>
    <NavLink path="/" label={'READ MORE'} className={classes.link}/> */}
    <CommonPostCard 
      imageSrc={`https://content-prod-live.cert.starbucks.com/binary/v2/asset/${data.id}.png`}
      imageCaption={data.imageCaption}
      imageClass={classes.image}
      cardTitle={data.title}
      links={[{path: '/', label: 'Read More'}]}

    />
      
  </Grid>
}

export default ArticleCard;