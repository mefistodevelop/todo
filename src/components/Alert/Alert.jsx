import React, { useContext } from 'react';
import './Alert.scss';
import AlertContext from '../../context/alert/alertContext';
import { CSSTransition } from 'react-transition-group';

const Alert = () => {
  const { alert, hideAlert } = useContext(AlertContext);

  return (
    <CSSTransition
      in={alert.isVisible}
      timeout={{
        enter: 500,
        exit: 300,
      }}
      classNames="alert"
      mountOnEnter
      unmountOnExit
    >
      <div className="Alert">
        <div className={`alert alert-${alert.type || 'primary'} Alert__message`}>
          {alert.text}
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
    </CSSTransition>

  );
}

export default Alert;
