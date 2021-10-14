import React from 'react';
import './App.scss';

// Components
import Header from './components/Header/Header';
import List from './components/List/List';

const App = () => {
  return (
    <section className="landing__page">
      <div className="landing__page__bg__circle"></div>
      <Header />
      <List />
    </section>
  );
};

export default App;
