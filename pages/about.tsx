import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import React from "react";
import RoasteryCard from "../components/cards/RoasteryCard";
import CenteredPageHeading from "../components/headers/CenteredPageHeading";
import LayoutWithPartition from "../components/layouts/layoutwithpartition";
import Frame from "../components/NewsFeed/Frame";
import PostLayout2v1, { POST_LAYOUT } from "../components/posts/PostLayout2v1";
import Wrapper from "../components/wrapper/Wrapper";
import { ILink } from "../types";
import { roasteries } from "../utils/data";

const useStyles = makeStyles(theme => ({


    mainImg: {
        maxWidth: '100%',
        height: 'auto'
    },

}));

enum LayoutType {
    LAYOUT_ONE,
    LAYOUT_TWO
}
interface IAboutPost {
    heading: string;
    description: string;
    imageUrl: string;
    layout: POST_LAYOUT;
    link: ILink;
    id: string;
}
const posts: IAboutPost[] = [
    {
        id: '1',
        heading: 'WHAT IS STARBUCKS RESERVE?',
        description: `Starbucks Reserve is a selection of the rarest, most extraordinary coffees  Starbucks has to offer. It’s where we push our own boundaries of craft, developing a unique roast for each individual lot before experimenting with coffee as an art form—brewing, aging, infusing and blending it into imaginative and often surprising creations. Through our Roasteries and bars, we share our discoveries and the enjoyment of exceptional coffee with the world.
        \n\nStarbucks began its journey over forty years ago to make premium arabica coffee accessible to all while fostering a culture of human connection. Starbucks Reserve is our commitment to push even further, scouring the world for its most exceptional beans while evolving the coffeehouse experience to something surprising and multi-sensory.`,
        imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40371.jpg',
        link: {
            path: '/coffee/',
            label: 'EXPLORE OUR COFFEES',
        },
        layout: POST_LAYOUT.LAYOUT_ONE
    },
    {
        id: '2',
        heading: 'WHERE TO FIND US',
        description: `Experience Starbucks Reserve through our Roasteries and bars worldwide. You can also find select, in-season Starbucks Reserve coffee at 1,500+ Starbucks locations.`,
        imageUrl: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40375.jpg',
        link: {
            path: '/visit/',
            label: 'VISIT STARBUCKS RESERVE',
        },
        layout: POST_LAYOUT.LAYOUT_TWO
    }

]

function About() {
    const classes = useStyles();
    return (
        <Grid container>
            <Grid item xs={12} >
                <CenteredPageHeading
                    heading={'ABout'}
                    caption={'In the name of coffee.'}
                />

            </Grid>
            <Grid item xs={12}>
                <Frame>
                    <Grid container>
                        <Grid item xs={12}>
                            <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40365.jpg" className={classes.mainImg} />
                        </Grid>
                        <Grid item xs={12}>
                            {
                                posts.map(post =>
                                    <PostLayout2v1
                                        key={post.id}
                                        {...post}
                                    />
                                )
                            }

                        </Grid>
                    </Grid>

                </Frame>
            </Grid>
            <Grid item xs={12}>
                <Wrapper label={'ROASTERIES'} link={'EXPLORE'} linkLabel={'EXPLORE'}>
                    <Grid container spacing={2}  alignItems={'center'} justifyContent={'center'}>
                        {roasteries.map(i => <RoasteryCard key={i.id} data={i} />)}
                    </Grid>

                </Wrapper>
            </Grid>

        </Grid>
    )
}
About.getLayout = LayoutWithPartition;
export default About;