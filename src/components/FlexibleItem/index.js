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
    },
    statusClosed: {
        color: "#e9b461",
        '& .roundedImgBG': {
            background: '#dbe7ff',
        }
    }


});

class FlexibleItem extends Component {
    
    
    render(){
        const {classes, listItem} = this.props;

        const renderImg = (index) => {
            const { listItem, classes } = this.props;
            return (
                <div className={classes.roundedImgBG}>
                    {/* <img src={require(listItem[index].additional.img)} alt="" />*/}
                </div>
            )
        }    
        const renderLink = (index) => {
            const { listItem, classes } = this.props;
            return (
                <Link to={listItem[index].additional.link}>{listItem[index].label}</Link>
            )
        } 

        // console.log(listItem);
        return (
            listItem.map((element, index) => (
                <div key={index} xs={12} className={classNames(classes.flexItem, element.additional.status ? classes.statusClosed: classes.statusOpen)} justify={ !index ? 'flex-start' : 'center'}>
                    {/* { element.additional.img ? renderImg(index) : '' } */}
                    {/* { element.additional.link ? renderLink(index) : '' } */}
                    <span className={element.additional.status ? classes.statusClosed: classes.statusOpen}>{element.label}</span>
                </div>
            ))
        );
    }
}


export default withStyles(styles)(FlexibleItem);