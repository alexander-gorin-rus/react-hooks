import React from 'react';
import Alert from '../components/alert/Alert';
import { AlertProvider } from '../components/alert/AlertContext';
import Main from '../components/Main';

const useContextHook = () => {

    return (
        <AlertProvider>
            <div>
                <Alert />
                <Main toggleAlert={() => {}} />
            </div>
        </AlertProvider>
    )
};

export default useContextHook;
