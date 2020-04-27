import React from 'react';
import './Home.scss';
import Form from '../Form/Form';
import Notes from '../Notes/Notes';

const Home = (props) => {
  const notes = [
    {id: 1, title: 'note 1'},
    {id: 2, title: 'note 2'},
    {id: 3, title: 'note 3'},
  ];
  return (
    <div className="home">
      <div className="home__form">
        <Form />
      </div>
      <div className="home__notes">
        <Notes notes={notes} />
      </div>
    </div>
  );
}

export default Home;
