import { Grid, makeStyles, Typography } from '@material-ui/core';
import classNames from 'classnames';
import React from 'react';
import LinkWithIcon from '../links/LinkWithIcon';

const useStyles = makeStyles(theme => ({
    container: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        display: 'flex',
        paddingLeft: '20px',
        paddingBottom: '40px',
        paddingTop: '40px',
        justifyContent: 'flex-start',
        [theme.breakpoints.up('lg')]: {
            paddingRight: '20%'    
        },
        [theme.breakpoints.down('md')]: {
            
        },
        
        
            
    },
    "@keyframes fadeIn": {
        "0%": {
            opacity: 0,
        },
        "100%": {
            opacity: 1
        }
    },
    labelFlexItem: {
        flexBasis: '30px',
        paddingRight: '10px'
       
    },
    childFlexItem: {
        display: 'flex',
        flexDirection: 'column',
    },
    label: {
        writingMode: 'vertical-lr',
        transform: 'rotate(-180deg)',
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '2px'

    }
    
}))

interface IProps {
    label?: string;
    link?: string;
    linkLabel?: string;
    children: React.ReactNode;
    className?: string;
}
function Frame({
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
        {link && <LinkWithIcon path={link} label={linkLabel || ''} style={{marginLeft: 'auto'}}/>}
        </div>
    </div>
}

export default Frame;