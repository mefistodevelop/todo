import React, { useContext, useEffect } from 'react';
import './Home.scss';
import Form from '../Form/Form';
import Notes from '../Notes/Notes';
import FirebaseContext from '../../context/firebase/firebaseContext';
import Spinner from '../Spinner/Spinner';

const Home = () => {
  const { isLoading, notes, fetchNotes, removeNote } = useContext(FirebaseContext);

  // eslint-disable-next-line
  useEffect(() => { fetchNotes() }, []);

  return (  
    <div className="home">
      <div className="home__form">
        <Form />
      </div>
      <div className="home__notes">
        {isLoading
          ? <Spinner />
          : <Notes notes={notes} onRemove={removeNote} />
        }
      </div>
    </div>
  );
}

export default Home;
