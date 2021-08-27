import { Grid, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import CoffeeProcessImageLayout from './CoffeeProcessImageLayout';
import Plx from 'react-plx';
import CoffeeProcessCard, { COFFEE_PROCESS_LAYOUT } from './CoffeeProcessCard';
import { coffeeProcesses } from '../../utils/data';


interface IProps {
    
}

const useStyles = makeStyles(theme => ({
    
    container: {
        borderBottom: `1px solid ${theme.palette.secondary.main}`
    }
    
}))
function CoffeeProcess({
    
}: IProps) {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {coffeeProcesses.map(i => <CoffeeProcessCard layout={COFFEE_PROCESS_LAYOUT.LAYOUT_ONE} key={i.id} {...i}/>)}
        </div>
    )

}


export default CoffeeProcess;