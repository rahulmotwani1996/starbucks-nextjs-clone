import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Container } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'
import classNames from 'classnames';
import React from 'react';
import NavLink from '../NavLink/NavLink';

const useStyles = makeStyles((theme) => ({
    appBar: {
        backgroundColor: '#ffffff',
        boxShadow: 'none',
        padding: '30px 0px'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        color: theme.palette.primary.main,
    },
    title: {
        flexGrow: 1,
        textAlign: 'center',
        color: theme.palette.primary.main,
        filter: 'blur(0.5px) brightness(0.2)',
        textTransform: 'uppercase',
        letterSpacing: theme.spacing(1),
        wordSpacing: theme.spacing(2),
        fontWeight: 500,
        fontSize: '1.2rem',
        [theme.breakpoints.up('lg')]: {
            marginLeft: '20%'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '1rem',
        }
    },
    link: {
        paddingTop: theme.spacing(3),
        color: theme.palette.secondary.main,
        fontSize: '12px',
        fontWeight: 400,
        letterSpacing: '2px',
        '&::after': {
            backgroundColor: theme.palette.secondary.main

        },
        '&:hover': {
            color: theme.palette.secondary.main,
            '&::after': {
                backgroundColor: theme.palette.secondary.main
            }
        }
    },
    icon: {
        fontSize: '30px',
        [theme.breakpoints.up('lg')]: {
            fontSize: '40px'
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px',
        }
        
    }
}));

function NavBar({ onMenuButtonClick, withPaddedTitle = false }: { onMenuButtonClick: () => void, withPaddedTitle?: boolean }) {
    const classes = useStyles({withPaddedTitle});
    return (
        <Container >
            <AppBar position="sticky" className={classes.appBar}>
                <Toolbar>
                    <IconButton edge="start"  className={classes.menuButton} color="inherit" aria-label="menu" onClick={onMenuButtonClick} size="medium">
                        <MenuIcon className={classes.icon}/>
                    </IconButton>
                    <Typography variant="body1" className={classes.title}>
                        Starbucks Reserve
                    </Typography>
                    <NavLink
                        path={'/loc'}
                        label={'Find a location'}
                        className={classes.link}
                    />
                </Toolbar>
            </AppBar>

        </Container>


    )
}

export default NavBar;