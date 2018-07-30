import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import FlexibleItem from '../FlexibleItem';
import { withStyles } from '@material-ui/core';
import classNames from 'classnames';

const styles = theme => ({
    flexList: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '0.15rem 0',
        background: '#ffffff',
        borderRadius: '3px',
        fontSize: '0.875rem',
        minHeight: '3rem',
        alignItems: 'center',
        padding: '0 1.5rem 0 1rem'
    },
    open: {
        color: "#e9b461",
        '& .roundedImgBG': {
            background: '#dbe7ff',
        }
    }    
});
class FlexibleList extends Component {

    render(){
        const {classes, list} = this.props;
        console.log(list);
        return (
            list.map((listItem, index) => (
                <Grid item xs={12}  key={index} className={classNames(classes.flexList, listItem.status ? classes.open : '') }>                    
                    <FlexibleItem listItem={[...listItem.options]} />
                </Grid>
            ))
        );
    }
}

export default withStyles(styles)(FlexibleList);