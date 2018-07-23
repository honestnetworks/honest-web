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
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import {NavLink, withRouter} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import Hidden from '@material-ui/core/Hidden';
import logoTitle from 'assets/images/login-title-image.png';
import AppFooter from 'components/AppFooter';
import Avatar from '@material-ui/core/Avatar';
import HonestContainer from 'hoc/HonestContainer';
import { checkIfDashboardPage } from 'utils/location';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    appFrame: {
        // height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        backgroundColor:'white',
        boxShadow:'none',
        color:'white',
        [theme.breakpoints.only('sm')]: {
            padding:'0 50px'
        },
        [theme.breakpoints.only('xs')]: {
            padding:'0'
        }
    },
    navBlock:{
        fontSize:'14px',
        '& a':{
            color:'#a0a6b5',
            padding:'0 1rem'
        },
        '& a.active, & a.selected':{
            color:'#4c84ff'
        },
        '& a:after':{
            background:'#4c84ff',
            content:`''`,
            width:'0',
            display:'block',
            height:'2px',
            transition:'width .3s',
            position:'relative',
            top:'22px'
        },
        '& a.active:after, a.selected:after':{
            width:'100%',
        },

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
    content: {
        flexGrow: 1,
        //backgroundColor: theme.palette.background.default,
        backgroundColor: '#f5f6fa',
        //padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginTop:'6vh',
        overflow:'auto',
        [theme.breakpoints.only('xs')]: {
            padding:'4vw 4vw 4vw 0vw',
        }
    },
    flex: {
        flex: 1,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
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
    },
    avatar: {
        color: theme.honest.general.main,
        background: '#dbe7ff',
        width: '2rem',
        height: '2rem',
        fontSize: '0.85rem'
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
        console.log("props", this.props)
        const {classes, location: {pathname}} = this.props;
        const {openDrawer, auth, anchorEl} = this.state;
        const openMenu = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <div className={classes.appFrame}>
                    <AppBar
                        className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
                    >
                        <HonestContainer>

                            <Toolbar disableGutters={!openDrawer}>
                                <Grid item xs={4}>
                                    <Hidden only={'xs'}>
                                <Typography variant="subheading" color="inherit" className={classes.flex}>
                                    <img src={logoTitle} alt="logo"/>
                                    {/*<div className={classes.margin}>*/}
                                        {/*<Hidden only={'xs'}>*/}
                                        {/*<Grid container alignItems="flex-end">*/}
                                        {/*</Grid>*/}
                                        {/*</Hidden>*/}
                                    {/*</div>*/}

                                </Typography>
                                    </Hidden>
                                </Grid>
                                <Grid item xs={4} style={{justifyContent:'center', display:'flex'}} className={classes.navBlock}>
                                    <NavLink 
                                        to={'/dashboard'} 
                                        className={classNames({ selected : checkIfDashboardPage(pathname)})}
                                    >
                                        Dashboard
                                    </NavLink>
                                    <NavLink to={'/contacts'}>Contact</NavLink>
                                </Grid>
                                <Grid item xs={4} style={{justifyContent:'flex-end', display:'flex'}}>
                                <div style={{display:'flex'}}>
                                    <IconButton style={{}}>
                                        <SearchIcon style={{width:'1.5rem',height:'1.5rem',transform:'rotate(90deg)', color:'#a0a6b5'}}/>
                                    </IconButton>
                                    {auth && (
                                        <div  style={{display: 'flex', alignItems: 'center', color:'#a0a6b5', fontSize: '0.85rem'}}>
                                            <IconButton
                                                aria-owns={openMenu ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                            >
                                                <Avatar className={classes.avatar}>
                                                    JN
                                                </Avatar>
                                            </IconButton>
                                            John Nelson
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
                                            <IconButton
                                                aria-owns={openMenu ? 'menu-appbar' : null}
                                                aria-haspopup="true"
                                                onClick={this.handleMenuOpen}
                                                color="inherit"
                                            >
                                                <MenuDown/>
                                            </IconButton>

                                        </div>
                                    )}
                                </div>
                                </Grid>
                            </Toolbar>
                        </HonestContainer>
                    </AppBar>
                    <main
                        className={classNames(classes.content)}
                    >
                        {this.props.children}
                        <AppFooter />
                    </main>
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