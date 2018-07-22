import React from 'react';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/Input';
import Menu from '@material-ui/core/Menu';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import classNames from 'classnames';
import {withStyles} from "@material-ui/core/styles/index";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import DraftsIcon from '@material-ui/icons/Drafts';
import HomeIcon from '@material-ui/icons/Home';
import { NavLink } from 'react-router-dom';
import ListItemText from '@material-ui/core/ListItemText';

const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor:'transparent',
        boxShadow:'none',
        color:'grey'
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'appBarShift-left': {
        marginLeft: drawerWidth,
    },
    'appBarShift-right': {
        marginRight: drawerWidth,
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawerPaper: {
        position: 'relative',
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        //...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop:'7vh',
        overflow:'auto',
        padding:'4vw'
    },
    'content-left': {
        marginLeft: -drawerWidth,
    },
    'content-right': {
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    'contentShift-left': {
        marginLeft: 0,
    },
    'contentShift-right': {
        marginRight: 0,
    },
    flex: {
        flex: 1,
        textAlign: 'left'
    },
    userMenuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    margin: {
        margin: theme.spacing.unit,
        marginTop: 0,
        padding: '-10px',
        display: 'inline-block'
    },
    navList:{
        a:{textDecoration:'none'}
    }
});

class SideNav extends React.Component  {
    state = {
        openDrawer: false,
        openMenu: false,

        anchor: 'left',
        auth: true,
        anchorEl: null,
    };

    handleDrawerOpen = () => {
        this.setState({openDrawer: true});
    };

    handleMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    handleDrawerClose = () => {
        this.setState({openDrawer: false});
    };

    handleLogout = () => {
        localStorage.clear();
        window.location.replace("/");
    };
    render() {
        const {classes, theme} = this.props;
        const {anchor, openDrawer, auth, anchorEl} = this.state;
        const openMenu = Boolean(anchorEl);
        const drawer = (
            <Drawer
                variant="persistent"
                anchor={anchor}
                open={openDrawer}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={this.handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                {/*<List>{mailFolderListItems}</List>*/}


                <List component="nav" className={classes.navList}>
                    <NavLink to="/dashboard">
                        <ListItem button>

                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Home"/>
                        </ListItem>
                    </NavLink>
                    <NavLink to="/contacts">
                        <ListItem button>
                            <ListItemIcon>
                                <DraftsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contacts"/>
                        </ListItem>
                    </NavLink>
                </List>


                <Divider />
                {/*<List>{otherMailFolderListItems}</List>*/}
            </Drawer>
        );
        let before = null;
        let after = null;

        if (anchor === 'left') {
            before = drawer;
        } else {
            after = drawer;
        }
        return (
            <div>
                <AppBar
                    className={classNames(classes.appBar, {
                        [classes.appBarShift]: openDrawer,
                        [classes[`appBarShift-${anchor}`]]: openDrawer,
                    })}
                >
                    <Toolbar disableGutters={!openDrawer}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={this.handleDrawerOpen}
                            className={classNames(classes.menuButton, openMenu && classes.hide)}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Welcome to the Honest
                        </Typography>
                        {auth && (
                            <div style={{display: 'flex', alignItems: 'center'}}>

                                <div className={classes.margin}>
                                    <Grid container alignItems="flex-end">
                                        <Grid item>
                                            <SearchIcon/>
                                        </Grid>
                                        <Grid item>
                                            <TextField style={{color: 'white'}}
                                                       id="input-with-icon-grid"
                                                       label="Search"/>
                                        </Grid>
                                    </Grid>
                                </div>

                                <IconButton
                                    aria-owns={openMenu ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenuOpen}
                                    color="inherit"
                                >
                                    <AccountCircle/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={openMenu}
                                    onClose={this.handleMenuClose}
                                >
                                    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                                </Menu>
                                <IconButton
                                    aria-owns={openMenu ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleLogout}
                                    color="inherit"
                                >
                                    <LogoutIcon/>
                                </IconButton>

                            </div>
                        )}

                    </Toolbar>
                </AppBar>
            </div>
        );
    }
};

// export default SideNav;
export default withStyles(styles, {withTheme: true})(SideNav);