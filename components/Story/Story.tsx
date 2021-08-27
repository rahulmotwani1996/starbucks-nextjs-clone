import React from 'react';
import Img from 'next/image';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import Plx from 'react-plx'
import classNames from 'classnames';
import { IStory } from '../../types';


const image1 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-65018.png'
const image2 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40494.jpg';
const image3 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40487.jpg';
const image4 = 'https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40497.jpg';



const useStyles = makeStyles(theme => ({
    gridContainer: {
        padding: theme.spacing(2)
    },
    storyDetails: {
        padding: theme.spacing(2),
        visibility: 'hidden',
    },
    storyTitle: {
        fontSize: '1.75rem',
        letterSpacing: '7px',
        fontWeight: 500

    },
    storyDescription: {
        fontSize: '0.9rem'

    },
    storyLink: {
        display: 'inline-block',
        marginLeft: theme.spacing(1),
        textTransform: 'uppercase',
        fontWeight: 200,
        fontSize: '0.9rem',
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
            color: '#ffffff'
            
        }
        


    },
    divider: {
        height: '1px',
        backgroundColor: theme.palette.grey[200],
        flexGrow: 0,
        width: '0%'

    },
    linkContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: theme.spacing(3),
        position: 'relative',
        left: '-200px',
        zIndex: 100
    },
    plx: {
        
    },
    plxContainer: {
        transform: 'translateY(0px)',
        transition: 'transform 1.5s ease-out, opacity 2s ease-out',
        height: '100%',
        paddingBottom: '160px'
    },
    bottomImageContainer: {
        textAlign: 'center',
        padding: theme.spacing(6)
    }

}))
function Story({ data }: {data: IStory}) {
    const classes = useStyles();
    const parallaxData: any[] = [
        {
            start: `#${data.id}`,
            duration: 300,
            properties: [
                {
                    startValue: 0,
                    endValue: -30,
                    property: 'translateY',
                 
                },
                {
                    startValue: 0,
                    endValue: 1,
                    property: 'opacity',
                 
                }
            ]
        }
    ]
    const image1ParallaxData: any[] = [
        {
            start: `#${data.id}`,
            duration: 500,
            properties: [
                {
                    startValue: 40,
                    endValue: -112,
                    property: 'translateY',
                }
            ]
        }
    ]
    const image2ParallaxData: any[] = [
        {
            start: `#${data.id}`,
            duration: 500,
            properties: [
                {
                    startValue: 10,
                    endValue: -120,
                    property: 'translateY',
                 
                }
            ]
        }
    ]
    const image3ParallaxData: any[] = [
        {
            start: `#${data.id}`,
            duration: 500,
            properties: [
                {
                    startValue: 0,
                    endValue: -180,
                    property: 'translateY',
                 
                }
            ]
        }
    ]
    const image4ParallaxData: any[] = [
        {
            start: `#${data.id}`,
            duration: 500,
            properties: [
                {
                    startValue: 5,
                    endValue: -110,
                    property: 'translateY',
                 
                }
            ]
        }
    ]

    const [showDetails, setShowDetails] = React.useState(false);

    

    return (
        <Grid container className={classes.gridContainer} alignItems={'center'} justifyContent={'flex-end'} id={`${data.id}`}>
            <Grid item xs={6}>
                <div className={'container'}>
                    <div className={'image1'}><Plx  style={{transitionDuration: '0.2s'}} parallaxData={image1ParallaxData}><img draggable={false} src={image1} className={'img'} /></Plx></div>
                    
                    <div className={'image2'}><Plx  style={{transitionDuration: '0.2s'}} parallaxData={image2ParallaxData}><img draggable={false} src={image2} className={'img'} /></Plx></div>
                    
                    
                    <div className={'image3'}><Plx  style={{transitionDuration: '0.2s'}} parallaxData={image3ParallaxData}><img draggable={false} src={image3} className={'img'} /></Plx></div>
                   
                    
                    <div className={'image4'}><Plx  style={{transitionDuration: '0.2s'}} parallaxData={image4ParallaxData}><img draggable={false} src={image4} className={'img'} /></Plx></div>

                </div>
            </Grid>
            
                <Grid item xs={6} style={{height: '100%'}}>
                <Plx 
                parallaxData={parallaxData} 
                onPlxStart={() => setShowDetails(false)}
                onPlxEnd={() => setShowDetails(true)}
                className={classes.plxContainer}
            >
                <div className={classNames(classes.storyDetails, {'show-animation': showDetails})}>

                    <Typography variant={'h3'} className={classes.storyTitle}>
                        {data.storyHeading}
                    </Typography>
                    <Typography variant={'body1'} className={classes.storyDescription}>

                        {data.storyDescription}
                    </Typography>
                    <div className={classes.linkContainer}>
                        <div className={classNames(classes.divider, {'grow-anim': showDetails})}></div>
                        <div className={classNames('myDiv',{'animated-link': showDetails })}>
                        <Typography className={classes.storyLink}>{data.storyLink.text}</Typography>
                        </div>
                        
                    </div>
                </div>
               
                </Plx>
                
            </Grid>
            <Grid item className={classes.bottomImageContainer} xs={12}>
                {
                    data.showBottomLogo ? 
                    <img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40488.png" width="400" height="500"/>
                    : null
                }

            </Grid>



            <style jsx>
                {
                    `
                    .plx-helper {
                        height: 10px;
                        width: 10px;
                    }
                    .myDiv {
                        opacity: 0;
                        flex-basis: 300px;

                    }
                    .animated-link {             
                        animation-delay: 1s;
                        animation-name: txtFadeIn;
                        animation-duration: 0.2s;
                        animation-fill-mode: forwards;
                    }
                    @keyframes txtFadeIn {
                        0% {
                            opacity: 0;
                        }
                        100% {
                            opacity: 1;
                        }
                    }
                    .show-animation {
                        visibility: visible;   
                    }

                    @keyframes grow {
                        0% {
                            width: 0%;
                        }
                        100% {
                            width: 100%;
                        }
                    }

                    .grow-anim {
                        animation-delay: 0.5s;
                        animation-name: grow;
                        animation-duration: 0.2s;
                        animation-fill-mode: forwards;                        
                    }

                    
                    .img {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                        max-height: 100%;
                    }
                        .container {
                            max-width: 100%;
                            max-height: 600px;
                            position: relative;
                            height: 600px;
                        }
                        .image1 {
                            position: absolute;
                            z-index: 5;
                            height: 70%;
                            width: 50%;
                           
                        }
                        .image2 {
                            position: absolute;
                            top: 20%;
                            left: 35%;
                            z-index: 4;
                            width: 40%;
                            height: 40%;
                            
                        

                        }
                        .image3 {
                            position: absolute;
                            z-index: 3;
                            height: 70%;
                            width: 50%;
                            left: 10%;
                            top: 30%;
                            

                        }
                        .image4 {
                            position: absolute;
                            z-index: 2;
                            top: 60%;
                            left: 40%;
                            width: 30%;
                            height: 30%;
                            
                        

                        }
                        .imagePlx {
                            transition-duration: 0.2s;

                        }
                    
                    `
                }
            </style>



        </Grid>
    )

}

export default Story;