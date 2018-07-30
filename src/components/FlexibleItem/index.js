import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import classNames from 'classnames';


const styles = theme => ({
    flexItem: {
        display: 'flex',
        '&:first-child': {
            color: '#a0a6b5'
        },
        '& span': {
            alignSelf: 'center'
        }
    },
    roundedImgBG: {
        borderRadius: '50%',
        background: '#dbe7ff',
        minHeight: '2rem',
        minWidth: '2rem',
        marginRight: '1rem'
    }
});

class FlexibleItem extends Component {
    
    renderImg = (status) => {
        const { listItem, classes } = this.props;
        let  img = 'closed_img';
        if(status){
            img = 'open_img';
        }
        return (
            <div className={classes.roundedImgBG}>
                {/* <img src={img} alt="status" /> */}
            </div>
        )
    }        

    render(){
        const {classes, listItem} = this.props;
        // console.log(listItem);
        return (
            listItem.map((element, index) => (
                <div key={index}  xs={12} className={classNames(classes.flexItem, listItem.status ? classes.statusClosed: classes.statusOpen)}>
                    {index == 0 ? this.renderImg(element.status) : ''}
                    <span>{element.label}</span>
                </div>
            ))
        );
    }
}

export default withStyles(styles)(FlexibleItem);