import React from 'react';
import { useContext } from 'react';
import {Ring} from './Grandpa';

const Special = () => {
    const receivedRing = useContext(Ring)
    return (
        <div>
            <h3>Special</h3>
            <p><small>{receivedRing}</small></p>
        </div>
    );
};

export default Special;