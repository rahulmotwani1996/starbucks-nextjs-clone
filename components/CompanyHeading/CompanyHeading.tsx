import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    container: {
        height: '400px',
        width: '100%',
        backgroundColor: theme.palette.secondary.main,
        paddingTop: theme.spacing(2)
    },
    heading: {
        color: '#ffffff',
        fontSize: '160px',
        fontWeight: 500,
        textTransform: 'uppercase',
        maxHeight: '100%',
        overflow: 'hidden'
    }
}))
function CompanyHeading() {
    const classes  = useStyles();
    return <div className={classes.container}>
        <Typography className={classes.heading}>This is starbucks reserve</Typography>

    </div>
}

export default CompanyHeading;