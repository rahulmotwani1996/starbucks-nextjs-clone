import { Grid, makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import LinkWithIcon from '../links/LinkWithIcon';

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        paddingBottom: '60px',
        paddingTop: '40px',
        justifyContent: 'flex-start',
        overflow: 'hidden', 
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: '20px',
            paddingRight: '20px',
        },
        position: 'relative',    
    },
    labelFlexItem: {
        flexBasis: '30px',
        paddingRight: '10px',
        textTransform: 'uppercase',
        [theme.breakpoints.down('xs')]: {
            padding: '20px 0px'
        }
       
    },
    childFlexItem: {
        flexGrow: 1,
        maxWidth: '1000px'
    },
    label: {
        
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '2px',
        
        [theme.breakpoints.up('sm')]: {
            writingMode: 'vertical-lr',
            transform: 'rotate(-180deg)',

        },
    },
    link: {
        position: 'absolute',
        bottom: '20px',
        right: '20px',
    }
    
}))

interface IProps {
    label?: string;
    link?: string;
    linkLabel?: string;
    children: React.ReactNode;
    className?: string;
}
function Wrapper({
    label,
    link,
    linkLabel,
    children,
    className
}: IProps) {
    const classes = useStyles();
    return <div className={classNames(className, classes.container)}>
        <div className={classes.labelFlexItem}>
            {label && <Typography className={classes.label}>{label}</Typography>}
        </div>
        <div className={classes.childFlexItem}>
        {children}
        
        </div>
        {link && <LinkWithIcon path={link} label={linkLabel || ''} className={classes.link}/>}
    </div>
}

export default Wrapper;