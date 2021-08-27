import { makeStyles } from '@material-ui/core';
import React from 'react';
import Link from 'next/link';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
    linkClass: {
        color: '#ffffff',
        fontSize: '20px', 
        marginBottom: '6px',
        textTransform: 'uppercase',
        '&:hover': {
            color: '#ffffff',
            '& > div' : {
                transformOrigin: 'bottom left',
                transform: 'scaleX(1)',
            }
            
        }
    },
    underline: {
        backgroundColor: '#ffffff',
        transform: 'scaleX(0)',
        transition: 'transform 0.25s ease-out',
        transformOrigin: 'bottom right',
        height: '2px'
    },
    container: {
        width: 'fit-content',
        padding: '10px 10px 10px 0px',
    }
}))

interface IProps {
    path: string;
    label: string;
    className?: string;
}
function NavLink({
    path,
    label,
    className,
}: IProps) {
    const classes = useStyles();
   return <div className={classes.container}>
       <a className={classNames(className,classes.linkClass)} href={path}>{label}
       <div className={classes.underline}></div>

       </a>
   </div> 
}


export default NavLink;
