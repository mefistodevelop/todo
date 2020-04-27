import React, { useContext } from 'react';
import './Notes.scss';
import AlertContext from '../../context/alert/alertContext';

const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  const handleRemove = (id) => {
    onRemove(id).then(() => alert.showAlert('The note has removed', 'warning'));
  };
  const notesItems = notes.map((note) => (
    <li className="list-group-item notes__item" key={note.id}>
      <div>
        <b className="notes__item-title">
          {note.title}
        </b>
        <small>{note.date}</small>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleRemove(note.id)}
        >
          &times;
        </button>
    </li>
  ));
  return (
    <div className="notes">
      <ul className="list-group">
        {notes.length ? notesItems : 'There are no notes yet...'}
      </ul>
    </div>
  );
}

export default Notes;
