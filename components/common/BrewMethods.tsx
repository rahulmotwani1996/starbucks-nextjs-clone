import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import NavLink from '../NavLink/NavLink';
import Frame from '../NewsFeed/Frame';
import Wrapper from '../wrapper/Wrapper';

interface IMethod {
    id: string;
    label: string;
}

const brewGuideList: IMethod[] = [
    {
        id: '132-40395',
        label: 'POUR OVER',
    },
    {
        id: '132-40399',
        label: 'COLD BREW'
    },
    {
        id: '132-40397',
        label: 'COFFEE PRESS'
    },
    {
        id: '132-40388',
        label: 'SIPHON'
    },
    {
        id: '132-40398',
        label: 'STOVETOP'
    }
]

const getImageUrl = (id: string) => `https://content-prod-live.cert.starbucks.com/binary/v2/asset/${id}.png
`
const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: '10px',
        justifyContent: 'flex-start',
        [theme.breakpoints.down('xs')]: { 
            flexDirection: 'column',

        }
    },
    image: {
        width: '100%',
        height: 'auto',
       

    },
    label: {
        fontSize: '14px',
        fontStyle:'italic'

    },
    link: {
        color: theme.palette.secondary.main,
        fontSize: '14px'

    },
    brewMethodContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        maxWidth: '180px',
        
    }
}))
function BrewGuide() {
    const classes = useStyles();
    const renderBrewMethod = ({id, label}: IMethod) => {
        return (
            <div className={classes.brewMethodContainer} key={id}>
                <img src={getImageUrl(id)} className={classes.image}/>
                <Typography className={classes.label}>{label}</Typography>
                <NavLink path='/brew-method/' label={'LEARN'} className={classes.link}/>

            </div>
        )

    }
    return (
        <Wrapper label={'BREW GUIDES'}>
            <div className={classes.container}>
                {
                    brewGuideList.map(i => renderBrewMethod(i))
                }
            </div>
            

        </Wrapper>
    )

}

export default BrewGuide;