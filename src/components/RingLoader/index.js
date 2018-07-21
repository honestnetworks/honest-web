import React from 'react';
import {RingLoader} from 'react-spinners';

const spinner = (props) => (
    <RingLoader
        color="red"
        loading={props.loading}
    />
);

export default spinner;
