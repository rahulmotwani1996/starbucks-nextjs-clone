import { Grid, makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import React from "react";
import SelectCoffeeCard from "../../components/cards/SelectCoffeeCard";
import CenteredPageHeading from "../../components/headers/CenteredPageHeading";
import LayoutWithPartition from "../../components/layouts/layoutwithpartition";
import Frame from "../../components/NewsFeed/Frame";
import { selectedCoffees } from "../../utils/data";

const useStyles = makeStyles(theme => ({
}))
function CoffeeArchive() {
    const classes = useStyles();
    return <Grid container>
        <Grid item xs={12} >
            <CenteredPageHeading
                heading={'STARBUCKS RESERVE™ COFFEES'}
                caption={'                Extraordinary coffees from around the world. Sourced for the season, roasted at Starbucks Reserve™ Roasteries and crafted with care. Selection varies seasonally and regionally.'}
            />

        </Grid>
        <Grid item>
            <Frame label={'SELECT COFFEES'}>
                <Grid container spacing={2} >
                    {selectedCoffees.map(i => <SelectCoffeeCard data={i} key={i.id} />)}
                </Grid>

            </Frame>
        </Grid>


    </Grid>

}


CoffeeArchive.getLayout = LayoutWithPartition;

export default CoffeeArchive;