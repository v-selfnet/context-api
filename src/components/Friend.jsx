import React from 'react';
import { useContext } from 'react';
import { Ring } from './Grandpa';

const Friend = () => {
    const receiveRing = useContext(Ring)
    return (
        <div>
            <h3>Friend</h3>
            <p><small>{receiveRing}</small></p>
        </div>
    );
};

export default Friend;