import React from 'react';

const SuperAdmin = (props) => {
    const {role} = props.user.user;
    if(role !== 'Super Admin'){
    // if(role === 'Super Admin'){
        return null
    } else {
        return props.children
    }
};
export default SuperAdmin;
