import AccountCircle from '@material-ui/icons/AccountCircle';
import LogoutIcon from '@material-ui/icons/Input';
import Menu from '@material-ui/core/Menu';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
//import DraftsIcon from '@material-ui/icons/Drafts';
import DraftsIconActive from '../assets/icons/contacts-active.svg';
import DraftsIconNonActive from '../assets/icons/contacts-non-active.svg';
//import HomeIcon from '@material-ui/icons/Home';
import HomeIconActive from '../assets/icons/main-active.svg';
import HomeIconNonActive from '../assets/icons/main-non-active.svg';
import { NavLink, withRouter } from 'react-router-dom';
import {createMuiTheme,MuiThemeProvider} from "@material-ui/core/styles";
import Hidden from '@material-ui/core/Hidden';
import ReactSVG from 'react-svg';

const drawerWidth = 240;
const closeDrawerWidth = 25;

const styles = theme => ({
    root: {
        flexGrow: 1
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
        backgroundColor:'#4c84ff',
        boxShadow:'none',
        color:'white'
    },
    appBarShift: {
        marginLeft: drawerWidth,
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
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'flex-start',
        padding: '0 8px'
    },
    drawerHeaderModify: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        padding: '0 8px'
    },
    content: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.default,
        backgroundColor: '#f1f3f8',
        //padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop:'7vh',
        overflow:'auto',
        padding:'4vw',
        marginTop:'60px',
        [theme.breakpoints.only('xs')]: {
            padding:'4vw 4vw 4vw 6.5vw',
        }
    },
    'content-left': {
        marginLeft: -closeDrawerWidth,
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
        // textAlign: 'left'
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'1.7vw'

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
    navList: {
        a: {textDecoration: 'none'},
        paddingTop: 49
    },
    listItemRoot: {
        '&>div':{
            color: '#adb5c2'
        }
    }
});

const customAppBar = createMuiTheme({
    overrides: {
        MuiInput: {
            root: {
                color: 'white',
            },
            underline:{
                '&::before':{
                    borderColor:'white'
                },
                '&::after':{
                    borderColor:'white'
                },
                '&:hover::before':{
                    borderColor:'white!important'
                }
            }
        },

    }
});

class PersistentDrawer extends React.Component {
    state = {
        openDrawer: false,
        openMenu: false,

        anchor: 'left',
        auth: true,
        anchorEl: null,
        isActive: true,
        open: false,
    };

    handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    handleDrawerClose = () => {
        this.setState({ open: false });
    };
    handleMenuOpen = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleMenuClose = () => {
        this.setState({anchorEl: null});
    };

    handleLogout = () => {
        localStorage.clear();
        window.location.replace("/");
    };

    checkIfHomePage = (path) => {
        return Boolean(path && path.includes('/home'));
    };

    render() {
        console.log('Layout props', this.props);
        const {classes, theme} = this.props;
        const {anchor, openDrawer, auth, anchorEl} = this.state;
        const openMenu = Boolean(anchorEl);
        const {location: {pathname}} = this.props;
        const drawer = (
        <Drawer
            variant="permanent"
            classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
        >
                <div className={this.state.open ?classes.drawerHeader:classes.drawerHeaderModify}>
                    <IconButton onClick={this.state.open ?this.handleDrawerClose:this.handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                </div>
                <List component="nav" className={classes.navList}>
                    <NavLink to="/home">
                    <ListItem
                        button
                        classes={{root: classes.listItemRoot}}
                    >
                        <ListItemIcon>
                            <img src={this.checkIfHomePage(pathname) ? HomeIconActive : HomeIconNonActive} alt="" style={{width:'21px'}}/>
                        </ListItemIcon>
                        <ListItemText disableTypography primary="HOME"/>
                    </ListItem>
                    </NavLink>
                    <NavLink to="/contacts">
                    <ListItem
                        classes={{root: classes.listItemRoot}}
                        button
                    >

                        <ListItemIcon>
                            <img src={!this.checkIfHomePage(pathname) ? DraftsIconActive : DraftsIconNonActive} alt="" style={{width:'21px'}}/>
                        </ListItemIcon>
                        <ListItemText disableTypography primary="CONTACT"/>
                    </ListItem>
                    </NavLink>
                </List>
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
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <MuiThemeProvider theme={customAppBar}>
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
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="subheading" color="inherit" className={classes.flex}>
                                HonestNetwork
                                <div className={classes.margin}>
                                    <Hidden only={'xs'}>
                                    <Grid container alignItems="flex-end">
                                        <Grid item>
                                            <SearchIcon style={{paddingRight:'10px',display:'flex'}}/>
                                        </Grid>
                                        <Grid item>
                                            <TextField
                                                className='searchHeaderField'
                                                style={{color: 'white'}}
                                                id="input-with-icon-grid"
                                                label="Search"
                                            />
                                        </Grid>
                                    </Grid>
                                    </Hidden>
                                </div>
                            </Typography>
                            {auth && (
                                <div   style={{display: 'flex', alignItems: 'center'}}>

                                    {/*<div className={classes.margin}>*/}
                                        {/*<Grid container alignItems="flex-end">*/}
                                            {/*<Grid item>*/}
                                                {/*<SearchIcon/>*/}
                                            {/*</Grid>*/}
                                            {/*<Grid item>*/}
                                                {/*<TextField style={{color: 'white'}}*/}
                                                           {/*id="input-with-icon-grid"*/}
                                                           {/*label="Search"/>*/}
                                            {/*</Grid>*/}
                                        {/*</Grid>*/}
                                    {/*</div>*/}

                                    <IconButton
                                        aria-owns={openMenu ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenuOpen}
                                        color="inherit"
                                    >
                                        <AccountCircle />
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
                                        <LogoutIcon />
                                    </IconButton>

                                </div>
                            )}

                        </Toolbar>
                    </AppBar>
                    </MuiThemeProvider>
                    {before}
                    <main
                        className={classNames(classes.content, classes[`content-${anchor}`], {
                            [classes.contentShift]: openDrawer,
                            [classes[`contentShift-${anchor}`]]: openDrawer,
                        })}
                    >
                        {this.props.children}
                    </main>
                    {after}
                </div>
            </div>
        );
    }
}



PersistentDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(withRouter(PersistentDrawer));