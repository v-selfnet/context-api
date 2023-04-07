import React from 'react';
import Friend from './Friend';

const Cousins = ({children, hasFriend}) => {
    return (
        <div>
            <h3>Cousin</h3>
            <p><small>{children}</small></p>
            {hasFriend && <Friend></Friend>}
        </div>
    );
};

export default Cousins;