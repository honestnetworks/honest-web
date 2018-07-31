import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import openStatus from 'assets/icons/openstatus.svg';
import closedStatus from 'assets/icons/closedstatus.svg';


const styles = theme => ({
    flexList: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.3rem 0',
        background: '#ffffff',
        borderRadius: '3px',
        fontSize: '0.875rem',
        minHeight: '3rem',
        alignItems: 'center',
        padding: '0 1.5rem 0 1rem',
        '& > div': {
          display: 'flex'
        },
        '& a': {
          color: '#171d33'
        }
    },
    roundedImgBG: {
      borderRadius: '50%',
      background: '#ffedd4',
      minHeight: '2rem',
      minWidth: '2rem',
      marginRight: '1rem',
      display: 'flex',
      justifyContent: 'center',
      '&.closed':{
        background: "#dbe7ff"
      }
    },
    labelContainer: {
      alignItems: 'center',
      color: "#a0a6b5"
    },   
    statusContainer: {
      '& .closed':{
        color: "#4c84ff"
      },
      '& .open':{
        color: "#e9b461"
      }
    }
});
class SupportHistory extends Component {
    renderImg = (status) => {
      const { classes } = this.props;
      let img = openStatus;
      let classBG = '';
      if(status){
        img = closedStatus;
        classBG = 'closed';
      }
      return(
        <span className={classNames(classes.roundedImgBG, classBG)}>
          <img src={img} alt="status"/>
        </span>
      )
    }

    renderStatus = (status) => {
      // const { classes } = this.props;
      let colorStatus = 'open';
      let textStatus = 'Open';
      if(status){
        colorStatus = 'closed';
        textStatus = 'Closed';
      }
      return(
        <span className={colorStatus}>
          {textStatus}
        </span>
      )
    }

    render(){
        const {classes, list} = this.props;
        return (
            list.map((listItem, index) => (
                <Grid item xs={12} container key={index} className={classNames(classes.flexList, !listItem.status ? classes.open : '') }>                    
                  <Grid item xs={4} className={classes.labelContainer}>
                    {this.renderImg(listItem.status)}
                    {listItem.label}
                  </Grid>
                  <Grid container justify='center' item xs={4} className={classes.statusContainer}>
                    {this.renderStatus(listItem.status)}
                  </Grid>
                  <Grid container justify='flex-end' item xs={4}>
                    <Link to={'#'}>Read More</Link>
                  </Grid>
                </Grid>
            ))
        );
    }
}

export default withStyles(styles)(SupportHistory);