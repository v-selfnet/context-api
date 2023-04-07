import React from 'react';
import { useContext } from 'react';
import { Money } from './Grandpa';

const Sister = () => {
    const money = useContext(Money)
    return (
        <div>
            <h3>Sister</h3>
            <p><small>Received Money: {money}</small></p>
        </div>
    );
};

export default Sister;