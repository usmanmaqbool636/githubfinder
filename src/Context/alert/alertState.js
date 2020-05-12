import React, { useReducer } from 'react';
import alertReducer from './alertReducer';
import AlertContext from './alertContext';
import { SET_ALERT } from '../types';
const AlertState = props => {
    const initialState = {
        alert: null
    }
    const [state, dispatch] = useReducer(alertReducer, initialState);
    const { alert } = state;

    const setAlert = (msg, type) => {
        dispatch({ type: SET_ALERT, payload: { msg, type } })
        setTimeout(() => {
            dispatch({ type: SET_ALERT, payload: null })
        }, 5000);
    }
    return <AlertContext.Provider value={{
        alert,
        setAlert
    }}>
        {props.children}
    </AlertContext.Provider>
}
export default AlertState;