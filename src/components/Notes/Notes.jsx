import React from 'react';
import './Notes.scss';
import Alert from '../Alert/Alert';

const Notes = ({ notes }) => {
  const notesItems = notes.map((note) => (
    <li className="list-group-item notes__item" key={note.id}>
      <div>
        <p className="notes__item-title">{note.title}</p>
        <small>{new Date().toLocaleDateString()}</small>
      </div>
      <button type="button" className="btn btn-outline-danger btn-sm">&times;</button>
    </li>
  ));
  return (
    <div className="notes">
      <Alert message="New note has added!" />

      <ul className="list-group">
        {notesItems}
      </ul>
    </div>
  );
}

export default Notes;
