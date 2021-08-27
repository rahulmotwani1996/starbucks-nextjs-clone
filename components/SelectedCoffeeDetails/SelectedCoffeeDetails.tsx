import { Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { articles, selectedCoffees } from "../../utils/data";
import ArticleCard from "../cards/ArticleCard";
import SelectCoffeeCard from "../cards/SelectCoffeeCard";
import BrewGuide from "../common/BrewMethods";
import LinkWithIcon from "../links/LinkWithIcon";
import Frame from "../NewsFeed/Frame";


const getImageUrl = (id: string) => `https://s00380pcdnspwesteurope-sirencatalog.azureedge.net/sirencatalog/CoffeeDetail_CoffeeCard_${id}_1100x1100.jpg`

const useStyles = makeStyles(theme => ({
    coffeeImg: {
        width: '100%',
        height: 'auto',
        maxWidth: '100%',
    },
    rightContainer: {
        borderLeft: `1px solid ${theme.palette.grey[200]}`,
        marginBottom: '30px',
    },
    container: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`
    },
    description: {
        padding: theme.spacing(2),
        maxWidth: '80%'
    },
    coffeeName: {
        fontSize: '45px',
        textAlign: 'end',
        fontWeight: 500,
        letterSpacing: '10px',

    },
    caption: {
        fontWeight: 500,
        fontStyle: 'italic'

    },
    nameContainer: {
        padding: '0px 15%',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '20%'

    },
    geography: {
        marginLeft: '10px',
        marginTop: '20px',
        letterSpacing: '2px',
        fontWeight: 100
    }
}))
function SelectedCoffeeDetails({id}: {id: string}) {
    const selectedCoffeeDetails = selectedCoffees.find(i => i.id === id);
    const classes = useStyles();
    return <><Grid container className={classes.container}>
        <Grid item xs={5}>
            <div className={classes.nameContainer}>
                <Typography className={classes.coffeeName}>
                    {selectedCoffeeDetails?.name || ''}
                </Typography>
                <Typography className={classes.caption}>
                    Molasses aromas complement notes of pomegranate, ripe persimmon and baking chocolate with a full creamy mouthfeel.

                </Typography>


            </div>

        </Grid>
        <Grid item xs={5} className={classes.rightContainer}>
            <img
                src={getImageUrl(id)}
                className={classes.coffeeImg}
            />
            <LinkWithIcon path={'/'} label={'Next Coffee'} />
            <Typography className={classes.geography}><b>GEOGRAPHY</b>: MULTI REGION</Typography>
            <img src="https://s00380pcdnspwesteurope-sirencatalog.azureedge.net/sirencatalog/CoffeeDetail_CoffeeMap_generic_960x640.jpg" className={classes.coffeeImg} />
            <Typography className={classes.description}>
                Starbucks Reserve Gravitas® Blend—available only at our Roasteries, where it’s roasted on-site—holds a place near and dear to our heart. Developed as an homage to our legacy of bold, assertive coffees, it documents where we’ve been—and where we’re headed. This particular blend is a fusion of three rare coffees. Finding harmony within such an exquisite palette of flavors is a challenge our master blenders relish, and they’ve given us a blend with all the weightiness its name promises. The cup delivers in spades: big and complex with layers of richness. Starbucks Reserve Gravitas® Blend is a nod to our past. And a toast to our future.
            </Typography>
        </Grid>
    </Grid>
        <BrewGuide />
        <Frame label={'SELECT COFFEE'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
            <Grid container spacing={2} >
                {selectedCoffees.slice(0,3).map(i => <SelectCoffeeCard data={i} key={i.id} />)}
            </Grid>

        </Frame>

        <Frame label={'RELATED ARTICLES'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
            <Grid container spacing={2} >
                {articles.map(i => <ArticleCard key={i.id} data={i} />)}
            </Grid>

        </Frame>

    </>

}

export default SelectedCoffeeDetails;