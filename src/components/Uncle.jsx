import React from 'react';
import Cousins from './Cousins';
import { useContext } from 'react';
import { Money } from './Grandpa';

const Uncle = () => {

    const [money, setMoney] = useContext(Money)

    return (
        <div>
            <h3>Uncle</h3>
            <p>Send Money: {money}</p>
            <button onClick={()=> setMoney(money+100)}>Send</button>
            <section className='flex'>
                <Cousins>Arif</Cousins>
                <Cousins>Mala</Cousins>
            </section>
        </div>
    );
};

export default Uncle;