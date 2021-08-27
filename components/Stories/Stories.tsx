import React from 'react';
import Img from 'next/image';
import { Container, Grid, makeStyles } from '@material-ui/core';
import Story from '../Story/Story';
import { mergeClasses } from '@material-ui/styles';
import { stories } from '../../utils/data';

const image1 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-65018.png'
const image2 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40494.jpg';
const image3 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40487.jpg';
const image4 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40497.jpg';

interface IStory {
    storyHeading: string;
}

const useStyles = makeStyles(theme => ({
    divider: {
        position: 'absolute',
        left: '50%', 
        height: '85%',
        backgroundImage: `linear-gradient(to top, #948b8d, ${theme.palette.grey[200]})`,
        width: '1px'
    },
    container: {
        position: 'relative',
        padding: theme.spacing(4),
        paddingTop: theme.spacing(8),
        textAlign: 'center'
    },
    storiesContainer:{
        paddingTop: theme.spacing(8)
    },
    bottomImage: {
        marginTop: '10px'
    }
}))
function Stories() {
    const classes = useStyles();
    return (
        <Container className={classes.container}>
            <div className={classes.divider}></div>
            
            <div className={classes.storiesContainer}>{ stories.map((i) => <Story key={i.id} data={i} />)}</div>
            <img className={classes.bottomImage} src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40516.png"></img>

        </Container>
        

    )

}

export default Stories;
