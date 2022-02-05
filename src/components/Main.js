import React from 'react';
import { useAlert } from './alert/AlertContext';

const Main = () => {

    const {show} = useAlert()

    return (
        <div className='pt-3'>
            <h1>This is Context Hook</h1>
            <button onClick={() => show('This text is from Alert')} className='btn btn-success'>Show Alert</button>
        </div>
    )
};

export default Main;
