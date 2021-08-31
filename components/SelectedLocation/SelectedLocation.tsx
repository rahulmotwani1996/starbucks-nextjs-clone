import React from 'react';
import Grid from '@material-ui/core/Grid';
import CenteredPageHeading from '../headers/CenteredPageHeading';
import Wrapper from '../wrapper/Wrapper';
import CommonPostCard from '../cards/CommonPostCard';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core';
import { IPost } from '../../types';
import { articles } from '../../utils/data';
import ArticleCard from '../cards/ArticleCard';

interface IProps {
    id: string;
}


const roasteryPosts: IPost[] = [
    {
        id: '1',
        imageSrc: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40831.jpg',
        cardTitle: 'Seattle Roastery Design',
        cardDescription: 'Combining the art and craft of coffee in an immersive and thoughtfully designed environment, this one-of-a-kind space features an impressive mix of bars and custom details.',
        links: [
            {
                path: '/',
                label: 'Take a closer look'
            }
        ]

    },
    {
        id: '2',
        imageSrc: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40844.jpg',
        cardTitle: 'Seattle Roastery Menu',
        cardDescription: 'Our passion for craft, innovation and discovery comes to life in an ever-evolving menu of coffee, cocktails and food.',
        links: [
            {
                path: '/',
                label: 'View Seattle Roastery menu'
            }
        ]

    }
]

const bookingPosts: IPost[] = [
    {
        id: '1',
        cardTitle: 'Book an event, private tour or experience at the Seattle Roastery',
        cardDescription: 'A spectacular destination. An ever-changing collection of rare coffees. And a space to bring your event to life in a uniquely memorable way.',
        imageSrc: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40849.jpg',
        links: [
            {
                path: '/',
                label: 'Book now'
            },
            {
                path: '/',
                label: 'Tours , experience and events'
            }
        ]
    },
    {
        id: '2',
        cardTitle: 'Book a scheduled tour at the Seattle Roastery',
        cardDescription: 'Witness the art, science and theater of coffee craft and artisanal baking. Enjoy thought-provoking, educational offerings in our one-of-a-kind shrine to all things coffee.',
        imageSrc: 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-57377.jpg',
        links: [
            {
                path: '/',
                label: 'Book now'
            },
            {
                path: '/',
                label: 'Tours , experience and events'
            }
        ]

    }
]
const useStyles = makeStyles(theme => ({
    image: {
        maxWidth: '1000px',
    },
    roasteryCard: {
        maxWidth: '500px',

    },
    roasteryImage: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        maxHeight: '500px',
    },
    bookings: {
        objectFit: 'cover',
        height: '100%',
        width: '100%',
        maxHeight: '300px',

    },
}))
function SelectedLocation({ id }: IProps) {
    const classes = useStyles();
    return <Grid container>
        <Grid item>
            <CenteredPageHeading
                heading={'SEATTLE ROASTERY'}
                caption={'We opened our first Starbucks Reserve Roastery in Seattle’s vibrant Capitol Hill neighborhood in December 2014. It is an immersive and dramatic expression of our passion for coffee, located just nine blocks from our original Starbucks Pike Place store.'}

            />
        </Grid>
        <Grid item xs={12}>
            <Wrapper>
                <CommonPostCard
                    imageClass={classes.image}
                    imageSrc={'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40815.jpg'}
                />
            </Wrapper>

        </Grid>
        <Grid item xs={12}>
            <Wrapper>
                <Grid container spacing={2}>
                    {
                        roasteryPosts.map(i => <Grid item key={i.id} xs={12} sm={6} lg={6}><CommonPostCard
                            className={classes.roasteryCard}
                            {...i}
                            imageClass={classes.roasteryImage}
                        /></Grid>)
                    }

                </Grid>

            </Wrapper>

        </Grid>
        <Grid item xs={12}>
            <Wrapper>
                <Grid container spacing={2}>
                    {
                        bookingPosts.map(i => <Grid item key={i.id} xs={12} sm={6} lg={6}><CommonPostCard
                            className={classes.roasteryCard}
                            {...i}
                            imageClass={classes.bookings}
                        /></Grid>)
                    }

                </Grid>
            </Wrapper>
        </Grid>
        <Grid item xs={12}>
            <Wrapper label={'Related articles'} link={'/'} linkLabel={'See all articles'}>
                <Grid container spacing={2} style={{maxWidth: '1200px'}}>
                    {articles.map(i => <ArticleCard key={i.id} data={i} />)}
                </Grid>

            </Wrapper>

        </Grid>

    </Grid>
}

export default SelectedLocation;