import { makeStyles } from '@material-ui/core'
import Plx from 'react-plx'

const useStyles = makeStyles(theme => ({
    imageOverlay: {
        position: 'relative',
       
        top: '-100px',
        [theme.breakpoints.up('lg')]: {
            minHeight: '600px'
        },
        [theme.breakpoints.down('md')]: {
            minHeight: '600px',
        },
        [theme.breakpoints.down('sm')]: {
            minHeight: '500px',
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '400px',
        }
    },

    image1Container: {
        position: 'absolute',
        top: '80px',
        left: '0px',
        zIndex: 3,


    },
    image2Container: {
        position: 'absolute',
        zIndex: 4,
        
        left: '200px',
        [theme.breakpoints.up('lg')]: {
            left: '200px',
            bottom: '10px',
        },
        [theme.breakpoints.down('md')]: {
            left: '150px',
            bottom: '120px'
        },
        [theme.breakpoints.down('sm')]: {
            left: '140px',
            bottom: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            left: '120px',
            bottom: '20px'
        }
        
    },
    image3Container: {
        position: 'absolute',

        
        [theme.breakpoints.up('lg')]: {
            bottom: '-110px',
            left: '80px',
        },
        [theme.breakpoints.down('md')]: {
            left: '50px',
            bottom: '50px'
        },
        [theme.breakpoints.down('sm')]: {
            left: '60px',
            bottom: '-60px'
        },
        [theme.breakpoints.down('xs')]: {
            left: '60px',
            bottom: '-30px'
        }


    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        maxWidth: '100%',
        maxHeight: '100%'
    },
    image1: {
        maxWidth: '250px',
        maxHeight: '250px',
        objectFit: 'cover',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '425px',
            maxHeight: '425px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: '325px',
            maxHeight: '325px',
        },
    
    },

    image2: {
        maxWidth: '120px',
        maxHeight: '160px',
        objectFit: 'cover',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '200px',
            maxHeight: '250px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: '160px',
            maxHeight: '200px',
        },

    },
    image3: {
        maxWidth: '120px',
        maxHeight: '160px',
        objectFit: 'cover',
        [theme.breakpoints.up('lg')]: {
            maxWidth: '200px',
            maxHeight: '250px',
        },
        [theme.breakpoints.between('sm', 'md')]: {
            maxWidth: '160px',
            maxHeight: '200px',
        },
    },
    plx: {
        transition: 'transform 0.2s ease-out'
    }
}))

interface IProps {
    image1: string;
    image2: string;
    image3: string;
}
function CoffeeProcessImageLayout({
    image1,
    image2,
    image3
}: IProps) {
    const classes = useStyles();
    const parallaxData = [
        {
            start: 'self', 
            duration: 400,
            properties: [
                {
                    startValue: 0,
                    endValue: -80,
                    property: 'translateY'
                }
            ]
        }
    ]
    const parallaxData1= [
        {
            start: 'self',
            duration: 400,
            properties: [
                {
                    startValue: 0,
                    endValue: -140,
                    property: 'translateY'
                }
            ]
        }
    ]
    const parallaxData2 = [
        {
            start: 'self', 
            duration: 400,
            properties: [
                {
                    startValue: 0,
                    endValue: -140,
                    property: 'translateY'
                }
            ]
        }
    ]
    return (
        <div className={classes.imageOverlay}>
            <div className={classes.image1Container}>
                <Plx parallaxData={parallaxData} className={classes.plx} >
                    <img className={classes.image1} src={image1} />
                </Plx>
            </div>
            <div className={classes.image2Container}>
                <Plx parallaxData={parallaxData1} className={classes.plx}>
                    <img className={classes.image2} src={image2} />
                </Plx>
                

            </div>
            <div className={classes.image3Container}>
                <Plx parallaxData={parallaxData2} className={classes.plx}>
                <img className={classes.image3} src={image3} />

                </Plx>
                

            </div>


        </div>
    )
}

export default CoffeeProcessImageLayout;