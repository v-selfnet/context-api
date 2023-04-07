import React from 'react';
import Cousins from './Cousins';

const Aunty = () => {
    return (
        <div>
            <h3>Aunty</h3>
            <section className='flex'>
                <Cousins>Tuhin</Cousins>
                <Cousins hasFriend={true}>Kamal</Cousins>
            </section>
        </div>
    );
};

export default Aunty;