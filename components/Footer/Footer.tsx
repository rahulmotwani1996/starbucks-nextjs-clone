import { Container, makeStyles, Typography } from "@material-ui/core";
import NavLink from "../NavLink/NavLink";


const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        padding: '80px 0px',
        position: 'relative',
        zIndex: 10001,
        overflow: 'hidden'
    },
    primaryLinksContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            justifyContent: 'center'
        }
    },
    secondaryLinksContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '12px',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        },


    },
    text: {
        color: theme.palette.grey[400],
        textTransform:  'uppercase',
        filter: 'blur(50%)'
    },
    secondaryLink: {
        fontSize: '14px',
        color: theme.palette.grey[700],
        [theme.breakpoints.down('sm')]: {
            fontSize: '12px'
        },
    },
    primaryLink: {
        fontSize: '14px',
        fontWeight: 800,
        letterSpacing: '1px'
    },
    primaryLinkList: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }

    }
}))


const secondaryLinks = ['COOKIE', 'PREFERENCES', 'PRIVACY POLICY', 'TERMS OF USE', 'US/CA CAREERS', 'MILANO CAREERS', 'SITE MAP', 'STARBUCKS.COM' ]

function Footer() {
    const classes = useStyles();
    const getPrimaryLinks = () => {
        return (<div className={classes.primaryLinkList}>
            <NavLink className={classes.primaryLink} path="/" label="ABOUT"/>
            <NavLink className={classes.primaryLink} path="/" label="FIND A LOCATION"/>
            <NavLink className={classes.primaryLink} path="/" label="INSTAGRAM"/>
            <NavLink className={classes.primaryLink} path="/" label="ABOUT"/>
        </div>)
    }
    const getSecondaryLinks = () => {
        return (<div className={classes.secondaryLinksContainer}>
            {secondaryLinks.map(i => <NavLink key={i} path={i} label={i} className={classes.secondaryLink}/>)}
            
        </div>)

    }
    return (<div className={classes.container}><Container>
        <div className={classes.primaryLinksContainer}>
            <Typography variant="h6" className={classes.text}>Starbucks Reserve</Typography>
            {getPrimaryLinks()}
        </div>
        {getSecondaryLinks()}
        
    </Container></div>)

}

export default Footer;
