import { Grid, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import LayoutWithPartition from "../components/layouts/layoutwithpartition";
import LinkWithIcon from "../components/links/LinkWithIcon";
import Frame from "../components/NewsFeed/Frame";

const useStyles = makeStyles(theme => ({
    caption: {
        fontStyle: 'italic',
        maxWidth: '40%',
        margin: 'auto',
        padding: '20px 0px'

    },
    baseDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        left: '-150px',

    },
    title: {
        letterSpacing: '10px'
    },
    headingContainer: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`
    },
    img: {
        maxWidth: '100%',
        height: 'auto',

    }
}))
interface IStore {
    city: string;
    names: string[];
}
const storesList: IStore[] = [
    {
        city: 'SEATTLE',
        names: [
            'SEATTLE ROASTERY IN-STORE MENU',
            'SEATTLE ROASTERY UBER EATS MENU',
            'SEATTLE ROASTERY HOURS',
            'SODO RESERVE IN-STORE MENU',
            'SODO RESERVE UBER EATS MENU',
            'SODO RESERVE HOURS',
        ]
    },
    {
        city: 'CHICAGO AREA',
        names: [
            'CHICAGO ROASTERY IN-STORE MENU',
            'CHICAGO ROASTERY UBER EATS MENU',
            'CHICAGO ROASTERY HOURS',
            'NAPERVILLE RESERVE IN-STORE MENU',
            'NAPERVILLE RESERVE UBER EATS MENU',
            'NAPERVILLE RESERVE HOURS',
        ]
    },
    {
        city: 'NEW YORK',
        names: [
            'NEW YORK ROASTERY IN-STORE MENU',
            'NEW YORK ROASTERY UBER EATS MENU',
            'NEW YORK ROASTERY HOURS',
            'GREENWICH LANE RESERVE BAR IN-STORE MENU',
            'GREENWICH LANE RESERVE BAR UBER EATS MENU',
            'GREENWICH LANE RESERVE BAR HOURS',
        ]
    }

]
function Menus() {
    const classes = useStyles();

    const renderSingleStore = (store: IStore) => {
        return (<Grid item xs={12}>
            <Frame>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Typography variant="h4">{store.city}</Typography>
            {store.names.map(i => <LinkWithIcon path="/" label={i} style={{fontWeight: 100}} key={i} />)}
            </div>
            </Frame>
           
        </Grid>)

    }
    const renderStores = () => {
        return storesList.map(store => renderSingleStore(store))
    }
    return <Grid container>
        <Grid item xs={12} className={classes.headingContainer}>
            <div className={classes.baseDetails}>
                <Typography variant="h3" className={classes.title}>U.S. MENUS</Typography>
                <Typography className={classes.caption}>
                    At these locations you can order for take-out or stay a while to enjoy your favorite beverages and Princi baked Italian classics. Select items are also available for delivery via Uber Eats.
                </Typography>
            </div>
        </Grid>
        <Grid item>
            <Frame>
                <div>
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-64644.jpg" className={classes.img} />
                </div>
            </Frame>
        </Grid>
        {renderStores()}


    </Grid>

}


Menus.getLayout = LayoutWithPartition;

export default Menus;