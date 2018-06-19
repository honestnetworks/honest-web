import React from 'react';

const Permission = (props) => {
    const {role} = props.user.user;
    if(role === 'Admin' || role === 'Super Admin'){
        return props.children
    } else {
        return null
    }
};
export default Permission;
