import React, { useContext } from 'react';
import AlertContext from '../../Context/alert/alertContext';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    const { alert } = alertContext;
    return (
        alert !== null && <div className={`alert alert-${alert.type}`}>
            <FontAwesomeIcon icon={faInfoCircle}/> {alert.msg}
        </div>
    )
}
export default Alert;