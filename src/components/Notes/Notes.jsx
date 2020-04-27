import React from 'react';
import './Notes.scss';

const Notes = ({ notes, onRemove }) => {
  const notesItems = notes.map((note) => (
    <li className="list-group-item notes__item" key={note.id}>
      <div>
        <p className="notes__item-title">
          {note.title}
        </p>
        <small>{note.date}</small>
      </div>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => onRemove(note.id)}
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
