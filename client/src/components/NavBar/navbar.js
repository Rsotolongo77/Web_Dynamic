import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import white_logo_transparent from '../../images/white_logo_transparent.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: theme.spacing(4)
    },
    menuIcon: {
        fontSize: '4.5rem',
    },
    logo: {
        height: '12rem',
        marginLeft: theme.spacing(7),
        marginTop: theme.spacing(1)
    },
    title: {
        flexGrow: 1,
    },
    navColor: {
        backgroundColor: 'transparent',
        boxShadow: 'none'
    }
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.navColor}>
                <Toolbar>
                    <Grid container>
                        <Grid item xs={10}>
                            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                                <MenuIcon className={classes.menuIcon} />
                            </IconButton>
                        </Grid>
                        <Grid container item xs={2} justify='center'>
                            <img className={classes.logo} src={white_logo_transparent} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;