import React, { useContext } from 'react';
import './Alert.scss';
import AlertContext from '../../context/alert/alertContext';

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  return (
    <div className="Alert">
      <div className={`alert alert-${alert.type || 'primary'} Alert__message`}>
        {alert.message}
        <button
          type="button"
          className="close"
          aria-label="Close"
          onClick={hideAlert}
        >
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default Alert;
