import { makeStyles, Select } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import { selectedCoffees, roasteries, articles } from "../../utils/data";
import ArticleCard from "../cards/ArticleCard";
import RoasteryCard from "../cards/RoasteryCard";
import SelectCoffeeCard from "../cards/SelectCoffeeCard";
import Frame from "./Frame";

const useStyles = makeStyles(theme => ({
    container: {
        borderTop:`1px solid ${theme.palette.grey[200]}`,
    },
    leftSection: {
        borderRight: `1px solid ${theme.palette.grey[200]}`,
    },
}))





function NewsFeed() {
    const classes = useStyles();

    return <Grid container className={classes.container}>
        <Grid item xs={3} className={classes.leftSection}>

        </Grid>
        <Grid item xs={9} >
            <Frame label={'SELECT COFFEE'} link={'/coffee/archive'} linkLabel={'EXPLORE'}>
                <Grid container spacing={2} >
                    {selectedCoffees.map(i => <SelectCoffeeCard data={i} key={i.id} />)}
                </Grid>

            </Frame>
            <Frame label={'ROASTERIES'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
                <Grid container spacing={2} >
                    {roasteries.map(i => <RoasteryCard key={i.id} data={i} />)}
                </Grid>

            </Frame>
            <Frame label={'RELATED ARTICLES'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
                <Grid container spacing={2} >
                    {articles.map(i => <ArticleCard key={i.id} data={i} />)}
                </Grid>

            </Frame>

        </Grid>

    </Grid>

}

export default NewsFeed;
