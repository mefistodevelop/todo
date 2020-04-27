import React, { useReducer } from 'react';
import FirebaseContext from './firebaseContext';
import firebaseReducer from './firebaseReducer';
import axios from 'axios';
import { SHOW_LOADER, REMOVE_NOTE, ADD_NOTE, FETCH_NOTES } from '../types';

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

    const payload = result.data
      ? Object.keys(result.data).map((key) => ({ ...result.data[key], id: key }))
      : [];

    dispatch({ payload, type: FETCH_NOTES });
  };

  const addNote = async title => {
    const note = {
      title,
      date: new Date().toLocaleDateString(),
    };

    const res = await axios.post(`${url}/notes.json`, note);
    const payload = {
      ...note,
      id: res.data.name,
    };

    dispatch({ payload, type: ADD_NOTE });
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
