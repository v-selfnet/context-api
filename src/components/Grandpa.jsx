import React, {createContext} from 'react';
import './Grandpa.css';
import Father from './Father';
import Uncle from './Uncle';
import Aunty from './Aunty';
import { useState } from 'react';

// Context API
export const Ring = createContext();
export const Money = createContext();

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    return (
        <div className='grandpa'>
            <h3>Grandpa</h3>
            <p>has money: {money}</p>
            <Money.Provider value={[money, setMoney]}>
                <Ring.Provider value="Gold">
                    <section className='flex'>
                        <Father></Father>
                        <Uncle></Uncle>
                        <Aunty></Aunty>
                    </section>
                </Ring.Provider>
            </Money.Provider>
        </div>
    );
};

export default Grandpa;

/*
    1. create a context & export
            export const Ring = createContext('Golden Ring');

    2. create a provider and pass value
            <Ring.Provider value="Gold"> 
                ...
            <Ring.Provider>

    3. receive value from any component
            const receivedRing = useContext(Ring)



*/