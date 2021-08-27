// 2 images version 1;
import React from 'react';
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ILink } from '../../types';

const useStyles = makeStyles(theme => ({
    headingContainer: {
        maxWidth: '60%',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '80%',
        }


    },
    descriptionContainer: {

    },
    heading: {
        fontSize: '3rem',
        fontWeight: 500,
        [theme.breakpoints.down('sm')]: {
            fontSize: '2rem'
        }
    },
    description: {
        lineHeight: '2rem',
        fontWeight: 300,
        fontSize: '14px',
        whiteSpace: 'break-spaces'

    },
    imageContainer: {

    },
    image: {
        maxWidth: '100%',
        width: '100%',
        height: 'auto'

    },
    rightContainer: {
        paddingTop: '4%'
    },
    linkContainer: {
        padding: `${theme.spacing(4)}px  0px`
    },
    link: {
        textTransform: 'uppercase',
        textDecoration: 'underline',
        color: theme.palette.secondary.main,
    }
}))

export enum POST_LAYOUT {
    LAYOUT_ONE,
    LAYOUT_TWO
}
interface IProps {
    className?: string;
    heading: string;
    description: string;
    imageUrl: string;
    link?: ILink;
    layout: POST_LAYOUT;
}
function PostLayout2v1({
    heading,
    description,
    imageUrl,
    link,
    layout,
}: IProps) {
    const classes = useStyles();
    return <Grid container justifyContent="space-between">
        {
            layout === POST_LAYOUT.LAYOUT_ONE &&
            <Grid item lg={5}>
                <div className={classes.imageContainer}>
                    <img src={imageUrl} className={classes.image} />
                </div>
            </Grid>
        }

        <Grid item lg={5} className={classes.rightContainer}>
            <div className={classes.headingContainer}>
                <Typography className={classes.heading}>
                    {heading}
                </Typography>
            </div>
            <div className={classes.descriptionContainer}>
                <Typography className={classes.description}>
                    {description}
                </Typography>
            </div>
            {link && <div className={classes.linkContainer}>
                <a href={link.path} className={classes.link}>{link.label}</a>
            </div>}
        </Grid>
        {
            layout === POST_LAYOUT.LAYOUT_TWO &&
            <Grid item lg={5}>
                <div className={classes.imageContainer}>
                    <img src={imageUrl} className={classes.image} />
                </div>
            </Grid>
        }

    </Grid>

}

export default PostLayout2v1;