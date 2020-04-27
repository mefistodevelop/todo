import React, { useState, useContext } from 'react';
import './Form.scss';
import AlertContext from '../../context/alert/alertContext';
import FirebaseContext from '../../context/firebase/firebaseContext';
import Alert from '../Alert/Alert';

const Form = () => {
  const [value, setValue] = useState('');
  const alert = useContext(AlertContext);
  const firebase = useContext(FirebaseContext);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (value.trim()) {
      firebase
        .addNote(value.trim())
        .then(() => alert.showAlert('New note has added', 'success'));
      
      setValue('');
    }
  };

  return (
    <div className="form-wrapper">
      <div className="form__alert">
        <Alert />
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form-control form-control-lg form__input"
          type="text"
          placeholder="Enter new note"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className="btn btn-primary mb-2 form__button">Add note</button>
      </form>
    </div>
  );
};

export default Form;
