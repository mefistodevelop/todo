import React from 'react';
import './About.scss';

const About = () => (
  <div className="about">
    <div className="jumbotron">
      <h1 className="display-4 about__title">Todo List App</h1>
      <p className="lead about__subtitle">App for your notes and tasks.</p>
      <p>
        Created by Oleg Rudenko&nbsp;
      <a className="badge badge-primary" href="mailto:oleg.ru93@yandex.ru">oleg.ru93@yandex.ru</a>
      </p>
    </div>
  </div>
);

export default About;
