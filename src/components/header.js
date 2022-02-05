import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
      <div className='d-flex'>
        <p className='text-center m-3'> 
          <Link to='/useStateHook'>useStateHook</Link>
        </p>
        <p className='text-center m-3'>
          <Link to='/useEffectHook'>useEffectHook</Link>
        </p>
        <p className='text-center m-3'>
          <Link to='/useRefHook'>useRefHook</Link>
        </p> 
        <p className='text-center m-3'>
          <Link to='/useMemoHook'>useMemoHook</Link>
        </p> 
        <p className='text-center m-3'>
          <Link to='/useCallBackHook'>useCallBackHook</Link>
        </p> 
        <p className='text-center m-3'>
          <Link to='/useContext'>useContext</Link>
        </p>
        <p className='text-center m-3'>
          <Link to='/customHook'>customHook</Link>
        </p> 
      </div>
  )
};
