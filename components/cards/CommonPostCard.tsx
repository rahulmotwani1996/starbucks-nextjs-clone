import { makeStyles, Typography } from "@material-ui/core";
import classNames from "classnames";
import { CSSProperties } from "react";
import NavLink from "../NavLink/NavLink";

interface ILink {
    path: string;
    label: string;
}
interface IProps {
    imageSrc?: string;
    imageClass?: string;
    className?: string;
    imageCaption?: string;
    cardTitle?: string;
    cardDescription?: string;
    links?: ILink[];
    styles?: CSSProperties;
    
}

const useStyles = makeStyles(theme => ({
    image: {
        width: '100%',
        height: 'auto',
    },
    container: {
        display: 'flex',
        flexDirection:'column',
        alignItems: 'flex-start',
        padding: '0px 4px'
    },
    imageCaption: {
        fontStyle: 'italic',
        fontSize: '12px',
        fontWeight: 500,
    },
    cardTitle: {
        fontWeight: 800,
        textTransform: 'uppercase',
        padding: '8px 0px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '20px',
            letterSpacing: '4px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            letterSpacing: '4px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '20px',
            letterSpacing: '4px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
            letterSpacing: '2px'
        }
    },
    cardDescription: {
        fontWeight: 200,
        [theme.breakpoints.up('lg')]: {
            fontSize: '16px',
            letterSpacing: '2px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '16px',
            letterSpacing: '2px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '16px',
            letterSpacing: '2px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '16px',
            letterSpacing: '2px'
        }
    },
    link: {
        color: theme.palette.secondary.main,
        fontSize: '16px',
        fontWeight: 200,
        display: 'inline-block',
        textTransform: 'uppercase'


    },
    linkContainer: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    divider: {
        '&::after': {
            content: "'|'",
            fontSize: '16px',
            color: theme.palette.secondary.main,
            margin: '0px 5px'
        }
    }
}))
function CommonPostCard({
    imageSrc,
    imageClass,
    className,
    imageCaption,
    cardTitle,
    cardDescription,
    links,
    styles,
    

}: IProps){
    const classes = useStyles();

    const withDivider = (index: number) => {
        return links && (links.length - 1) !== index;
        
    }
    const renderExternalLinks = () => {
        if(links) {
            return <div className={classes.linkContainer}>
                {links.map((i, index) => <NavLink {...i} key={index} className={classes.link} containerClass={classNames({[classes.divider]: withDivider(index)})}/>)}
            </div>;
        }
        return null;
    }
    return (<div className={classNames(className, classes.container)} style={styles}>
            <img src={imageSrc} className={classNames(imageClass, classes.image)}/>
            {imageCaption ? <Typography className={classes.imageCaption}>{imageCaption}</Typography> : null}
            {cardTitle ? <Typography className={classes.cardTitle}>{cardTitle}</Typography> : null}
            {cardDescription ? <Typography className={classes.cardDescription}>{cardDescription}</Typography> : null}
            {links ? renderExternalLinks() : null}

    </div>)

}

export default CommonPostCard;
