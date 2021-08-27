import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Layout from "./layout";


const useStyles = makeStyles(theme => ({
    leftDiv: {
        
    },
    verticalDivider: {
        width: '1px', 
        position: 'absolute', 
        height: '100%', 
        backgroundColor: '#b2b2b2', 
        left: '25%', 
        zIndex: 10000,
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        }

    }
}))

function LayoutWithPartition(children: React.ReactNode) {
    const classes = useStyles();
    return (
        <>
            <div style={{}} className={classes.verticalDivider}></div>
            <Layout withPaddedTitle>
                <Grid container>
                    <Grid item xs={12} sm={12} md={3} className={classes.leftDiv}></Grid>
                    <Grid item xs={12} sm={12} md={9}>{children}</Grid>
                </Grid>
            </Layout>
        </>

    )
}
export default LayoutWithPartition;


