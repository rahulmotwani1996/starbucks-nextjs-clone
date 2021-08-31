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
        '&::after': {
            backgroundColor: theme.palette.secondary.main,
        }
    },
    container: {
        width:'fit-content',
        padding: '10px 10px 10px 0px',
    },
}))

interface IProps {
    path: string;
    label: string;
    className?: string;
    containerClass?: string;
}
function NavLink({
    path,
    label,
    className,
    containerClass,
}: IProps) {
    const classes = useStyles();
   return <div className={classNames(classes.container, containerClass)}>
       <a className={classNames(className,classes.linkClass, 'hoverAnim')} href={path}>{label}
       </a>
   </div> 
}


export default NavLink;
