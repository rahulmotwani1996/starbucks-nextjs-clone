import { Button, Theme, Typography, Grid } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
    button: {
        backgroundColor: theme.palette.grey[300],
        margin: theme.spacing(1)
    },
    buttonContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    container: {
        position: 'absolute', 
        top: 0,
        left: 0,
    }
}))

function CookiesDialog() {
    const classes = useStyles();
    return (
        <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className={classes.container}
        >
            <Grid item xs={6}>
                <Typography variant="body2">By using the Starbucks site, you agree with our use of cookies.</Typography>
            </Grid>
            <Grid item>
                <div className={classes.buttonContainer}>
                <Button className={classes.button} onClick={() => { }}>Want to know more?</Button>
                    <Button className={classes.button} onClick={() => { }}>Just accept the cookies?</Button>
                </div>
                    
            </Grid>

        </Grid>
    )
}

export default CookiesDialog;
