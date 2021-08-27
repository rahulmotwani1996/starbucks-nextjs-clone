import { makeStyles, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";

interface IProps {
    heading: string;
    caption: string;
    style?: CSSProperties;
}

const useStyles = makeStyles(theme => ({
    caption: {
        fontStyle: 'italic',
        maxWidth: '40%',
        margin: 'auto',
        padding: '20px 0px',
        

    },
    baseDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        left: '-11%',

    },
    title: {
        letterSpacing: '10px',
        textTransform: 'uppercase'
    },
    headingContainer: {
        borderBottom: `1px solid ${theme.palette.grey[200]}`,
        paddingBottom: '40px'
    },
}))



function CenteredPageHeading({
    heading,
    caption,
}: IProps) {
    const classes = useStyles();
    return (
        <div className={classes.headingContainer}>
            <div className={classes.baseDetails}>
                <Typography variant="h3" className={classes.title}>{heading}</Typography>
                <Typography className={classes.caption}>
                    {caption}
                </Typography>
            </div>

        </div>

    )

}


export default CenteredPageHeading;