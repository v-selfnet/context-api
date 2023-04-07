import React from 'react';
import Special from './Special';

const MySelf = ({ring}) => {
    return (
        <div>
            <h3>Myself</h3>
            <Special ring={ring}></Special>
        </div>
    );
};

export default MySelf;