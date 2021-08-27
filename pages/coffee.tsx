import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ArticleCard from "../components/cards/ArticleCard";
import CoffeeProcess from "../components/CoffeeProcess/CoffeeProcess";
import BrewGuide from "../components/common/BrewMethods";
import CenteredPageHeading from "../components/headers/CenteredPageHeading";
import LayoutWithPartition from "../components/layouts/layoutwithpartition";
import LinkWithIcon from "../components/links/LinkWithIcon";
import Frame from "../components/NewsFeed/Frame";
import Wrapper from "../components/wrapper/Wrapper";
import { articles } from "../utils/data";


const useStyles = makeStyles(theme => ({
        link: {
                color: theme.palette.secondary.main
        },
        image: {
                height: 'auto',
                maxWidth: '400px'

        },
        locationFeed: {
                display: 'flex',
                alignItems: 'center',
                [theme.breakpoints.down('xs')]: {
                        flexDirection: 'column',
                        justifyContent: 'center'
                }
                
        },
        descriptionContainer: {
                maxWidth: '400px',
                padding: '20px',
                [theme.breakpoints.down('xs')]: {
                        paddingLeft: '8px'
                }
        },
        title: {

        },

}));



function Coffee() {
    const classes = useStyles();

    const createVisitStarbucksFeedItem = () => {
            return (
                    <Wrapper label={'LOCATIONS'}>
                            <div className={classes.locationFeed}>
                                <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40597.jpg" className={classes.image}/>
                                <div className={classes.descriptionContainer}>
                                        <Typography variant="h6">
                                        VISIT STARBUCKS RESERVE
                                        </Typography>
                                        <Typography>
                                        Visit us at a Starbucks Reserve Roastery or coffee bar, or find Starbucks Reserve coffee at select Starbucks locations.
                                        </Typography>
                                        <LinkWithIcon label={'LEARN MORE'} path="/visit" className={classes.link} style={{justifyContent: 'flex-start'}}></LinkWithIcon>
                                </div>

                            </div>
                            
                            

                    </Wrapper>
            )
    }
    return (
        <Grid container>
            <Grid item xs={12}>
                <CenteredPageHeading 
                        heading={'coffee'}
                        caption={'In the name of coffee.'}
                />
            </Grid>
            <Grid item xs={12}>
                    <CoffeeProcess />
            </Grid>
            <Grid item xs={12}>
                    <BrewGuide />
            </Grid>
            <Grid item xs={12}>
                    {createVisitStarbucksFeedItem()}
            </Grid>
            <Grid item xs={12}>
            <Wrapper label={'RELATED ARTICLES'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
                <Grid container spacing={4} style={{padding: '0px 10px'}}>
                    {articles.map(i => <ArticleCard key={i.id} data={i} />)}
                </Grid>

            </Wrapper>
            </Grid>

        </Grid>
    )
}
Coffee.getLayout = LayoutWithPartition;
export default Coffee;