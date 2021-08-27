import { Button, Container, Grid, IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import Img from 'next/image';
import NavLink from '../NavLink/NavLink';
import { CloseRounded } from '@material-ui/icons';
import { useRouter } from 'next/dist/client/router';
import { availablePaths } from '../../utils/path';
import classNames from 'classnames';


const useStyles = makeStyles(theme => ({
    container: {
        backgroundColor: theme.palette.primary.main,
        height: '100vh',
        padding: theme.spacing(2),
        position: 'relative',
        zIndex: 10002,
    },
    logo: {
        width: '200px',
        height: '200px'
    },
    closeButton: {
        color: '#ffffff'
    },
    activeLink: {
        color: theme.palette.secondary.main,
    },
    linkBase: {
        fontSize: '60px',
        fontWeight: 400,
        letterSpacing: '2px'
    }
}))



function Navigator({onCloseNaviagtor}: { onCloseNaviagtor: () => void}) {
    const classes = useStyles();
    const router = useRouter();

    const isActivePath = (path: string) =>  {
        if(path === 'home' && router.pathname === '/') return true;
        const regex = new RegExp(`${path}\/*`);
        return regex.test(router.pathname)
    }

    const getLinkClass = (path: string) => {
        return classNames({[classes.activeLink]: isActivePath(path)}, classes.linkBase)   
    }
    return <Grid container className={classes.container}>
        <Grid item xs={12}>
        <IconButton className={classes.closeButton} aria-label="upload picture" component="span" onClick={onCloseNaviagtor}>
          <CloseRounded />
        </IconButton>
        </Grid>
        
        <Grid item xs={12}><Grid container  alignItems="center">
        <Grid item xs={2}>
            <Img src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/132-40897.png" width="150" height="200" />
        </Grid>
        <Grid item xs={10}>
            <Container fixed>
                {
                    availablePaths.map((item) => <NavLink key={item.id} {...item} className={getLinkClass(item.id)} />)
                }

            </Container>
        </Grid>
        </Grid>
        </Grid>

    </Grid>
}

export default Navigator;