import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import axios from 'axios';
import { SHOW_LOADER, REMOVE_NOTE } from '../types';

const url = process.env.REACT_APP_DB_URL;

const FirebaseState = ({ children }) => {
  const initialState = {
    notes: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const showLoader = () => dispatch({ type: SHOW_LOADER });

  const fetchNotes = async () => {
    showLoader();
    const result = await axios.get(`${url}/notes.json`);
    console.log('fetchNotes', result.data);
  };

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toJSON(),
    };

    const res = await axios.post(`${url}/notes.json`, note);
    console.log('res is ', res);
  };

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`);
    dispatch({
      type: REMOVE_NOTE,
      payload: id,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        showLoader, addNote, removeNote, fetchNotes,
        isLoading: state.isLoading,
        notes: state.notes
      }}
    >
      {children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseState;
