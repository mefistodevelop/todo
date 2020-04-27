import React from 'react';
import './Form.scss';

const Form = () => {
  return (
    <form className="form">
      <input
        className="form-control form-control-lg form__input"
        type="text"
        placeholder="Enter new note"
      />
      <button type="submit" className="btn btn-primary mb-2">Add note</button>
    </form>
  );
}

export default Form;
