import React, { useContext } from 'react';
import './Notes.scss';
import AlertContext from '../../context/alert/alertContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Notes = ({ notes, onRemove }) => {
  const alert = useContext(AlertContext);
  const handleRemove = (id) => {
    onRemove(id).then(() => alert.showAlert('The note has removed', 'warning'));
  };

  const notesItems = notes.map((note) => (
    <CSSTransition key={note.id} classNames="note" timeout={800}>
      <li className="list-group-item notes__item">
        <div className="notes__content-wrapper">
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
    </CSSTransition>

  ));
  return (
    <div className="notes">
      <TransitionGroup component="ul" className="list-group">
        {notes.length ? notesItems : 'There are no notes yet...'}
      </TransitionGroup>

    </div>
  );
}

export default Notes;
