import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CoffeeProcessImageLayout from './CoffeeProcessImageLayout';
import Plx from 'react-plx';
import { ICoffeeProcess } from '../../types';


export enum COFFEE_PROCESS_LAYOUT {
    LAYOUT_ONE,
    LAYOUT_TWO
}
interface IProps extends ICoffeeProcess {
    layout: COFFEE_PROCESS_LAYOUT;
}

const useStyles = makeStyles(theme => ({
    
    cardContainer: {
        padding: '100px 0px 0px 10px',
        [theme.breakpoints.up('lg')]: {
            padding: '100px 0px 0px 40px',
        },
        [theme.breakpoints.down('md')]: {
            padding: '80px 0px 0px 10px',
        }
    },
    processTitle: {
        padding: '20px 0px',
        letterSpacing: '4px'

    },
    processDescription: {
        maxWidth: '350px',
        fontWeight: 300,
        letterSpacing: '2px'

    },
    detailsContainer: {
        display: 'flex', 
        flexDirection: 'column', 
        height: '100%', 
        justifyContent: 'center', 
        padding: '20px 20px',
        alignItems: 'flex-end',
        textAlign: 'end' 
        
        
    },
    plx: {
        height: '100%',
        transition: 'transform 0.2s ease-out'
    }
    
}))
function CoffeeProcessCard({
    layout,
    id,
    title,
    description,
    image1,
    image2,
    image3
}: IProps) {
    const classes = useStyles();
    const parallaxData = [
        {
            start: 'self', 
            duration: 400,
            properties: [
                {
                    startValue: 0,
                    endValue: -80,
                    property: 'translateY'
                }
            ]
        }
    ]
    return (
        <Grid container className={classes.cardContainer}>
            <Grid item xs={12} sm={6} lg={4}>
                <Plx parallaxData={parallaxData} className={classes.plx}>
                <div className={classes.detailsContainer} style={{}}>
                    <Typography variant="h4" className={classes.processTitle}>
                        {title}
                    </Typography>
                    <Typography variant="body1" className={classes.processDescription}>
                        {description}
                    </Typography>
                </div>

                </Plx>
                
            </Grid>
            <Grid item xs={12} sm={6} lg={4}>
                <CoffeeProcessImageLayout image1={image1} image2={image2} image3={image3} />
            </Grid>

        </Grid>
    )

}


export default CoffeeProcessCard;