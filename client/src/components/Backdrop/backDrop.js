import React from 'react';

import './backDrop.css';

const BackDrop = props => (
    <div className='backDrop' onClick={props.click} />
);

export default BackDrop;