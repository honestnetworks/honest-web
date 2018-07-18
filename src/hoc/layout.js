import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuDown from '@material-ui/icons/ArrowDropDown';
import Menu from '@material-ui/core/Menu';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';

import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import logoTitle from 'assets/images/login-title-image.png';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
        //color:'red'
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
        //backgroundColor:'#4c84ff',
        backgroundColor:'white',
        boxShadow:'none',
        color:'white',
        //width: `calc(100% - ${73}px)`,
        [theme.breakpoints.only('xs')]: {
            //width: `calc(100% - ${57}px)`,
            height:'60px'
        }
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
        padding: '0 8px',
        marginTop:'8px'
    },
    drawerHeaderModify: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        padding: '0 8px',
        marginTop:'8px'

    },
    content: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.default,
        backgroundColor: '#f5f6fa',
        //padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop:'7vh',
        overflow:'auto',
        padding:'0 4vw',
        [theme.breakpoints.only('xs')]: {
            padding:'4vw 4vw 4vw 0vw',
        }
    },
    'content-left': {
        //marginLeft: -closeDrawerWidth,
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
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        paddingLeft:'150px',
        color:'#4c84ff',
        '& img':{
            width:'63px'
        }

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
            color: '#adb5c2',
            fontFamily: "Poppins, san-serif"
        },
        marginBottom: '8px'
    },
    label: {
        fontSize: '0.85rem',
        color: '#fff'
    },
    inputWrapper:{
        border:'rgba(255,255,255,0.7) 1px solid',
        borderRadius:'2px',
        display:'flex',
        alignItems:'center',
        marginRight:'1rem',
        '& svg': {
          opacity:'0.7'
        },
        "&:focus":{
            border:'rgba(255,255,255,1) 1px solid',
        }
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

    render() {
        const {classes} = this.props;
        const {anchor, openDrawer, auth, anchorEl} = this.state;
        const openMenu = Boolean(anchorEl);

        let before = null,
            after = null;

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <Toolbar disableGutters={!openDrawer}>
                            <Typography variant="subheading" color="inherit" className={classes.flex}>
                                <img src={logoTitle} alt="logo"/>
                                <div className={classes.margin}>
                                    <Hidden only={'xs'}>
                                    <Grid container alignItems="flex-end">
                                    </Grid>
                                    </Hidden>
                                </div>
                            </Typography>
                            {/*<Hidden only={'xs'}>*/}
                            {/*<div className={classes.inputWrapper}>*/}
                                {/*<Grid item>*/}
                                    {/*<SearchIcon style={{padding:'0 0.6rem',display:'flex'}}/>*/}
                                {/*</Grid>*/}
                                {/*<Grid item>*/}
                                    {/*<TextField*/}
                                    {/*className='searchHeaderField'*/}
                                    {/*style={{color: 'white'}}*/}
                                    {/*id="input-with-icon-grid"*/}
                                    {/*placeholder={'Search Building Name'}*/}
                                    {/*InputProps={{*/}
                                        {/*classes: {*/}
                                            {/*input: classes.label*/}
                                        {/*}*/}
                                    {/*}}*/}
                                    {/*/>*/}
                                {/*</Grid>*/}
                            {/*</div>*/}
                            {/*</Hidden>*/}

                            {auth && (
                                <div   style={{display: 'flex', alignItems: 'center', color:'#a0a6b5'}}>
                                    <IconButton
                                        aria-owns={openMenu ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        color="red"
                                    >
                                        <AccountCircle style={{width:'2rem',height:'2rem'}}/>
                                    </IconButton>
                                    test
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
                                        <MenuItem onClick={this.handleLogout}>Log Out</MenuItem>
                                    </Menu>
                                    {/*<IconButton*/}
                                        {/*aria-owns={openMenu ? 'menu-appbar' : null}*/}
                                        {/*aria-haspopup="true"*/}
                                        {/*onClick={this.handleLogout}*/}
                                        {/*color="inherit"*/}
                                    {/*>*/}
                                        {/*<LogoutIcon />*/}
                                    {/*</IconButton>*/}
                                    <IconButton
                                        aria-owns={openMenu ? 'menu-appbar' : null}
                                        aria-haspopup="true"
                                        onClick={this.handleMenuOpen}
                                        //onClick={this.handleLogout}
                                        color="inherit"
                                    >
                                        <MenuDown/>
                                    </IconButton>

                                </div>
                            )}

                        </Toolbar>
                    </AppBar>
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