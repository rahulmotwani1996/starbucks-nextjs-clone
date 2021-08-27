import { makeStyles } from "@material-ui/core";
import { ArrowRightAlt } from "@material-ui/icons";
import classNames from "classnames";
import React, { CSSProperties } from "react";

interface IProps {
    path: string;
    label: string;
    className?: string;
    style?: CSSProperties;
}

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        padding: '5px 0px',
        justifyContent: 'flex-end',
        '&:hover': {
            '& > svg': {
                position: 'relative',
                right: '-5px',
                transition: 'right 0.2s ease',
                

            }
        },
        
    },
    link: {
        textTransform: 'uppercase',
        
        
    },
    icon: {
        
    }
}))
function LinkWithIcon({
    label,
    path,
    className,
    style
}: IProps) {
    const classes = useStyles();
    const linkRef = React.useRef<HTMLAnchorElement | null>(null);
    return (
        <div className={classNames(className, classes.container)} onClick={() => linkRef.current?.click() } style={style}>
            <a href={path} className={classes.link} ref={linkRef} target={'_blank'}>{label}</a>
            <ArrowRightAlt className={classes.icon}></ArrowRightAlt>
        </div>
    )
}

export default LinkWithIcon;