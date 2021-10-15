import React from 'react';
import './App.scss';

// Components
import Header from './components/Header/Header';
import List from './components/List/List';
import Container from './components/Container/Container';

const App = () => {
  return (
    <section className="landing__page">
      {/* <div className="landing__page__bg__circle"></div> */}
      <Header />
      <List />
      <Container />
    </section>
  );
};

export default App;
