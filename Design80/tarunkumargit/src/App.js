import React from 'react';
import './App.scss';

// Components
import Header from './components/Header/Header';
import List from './components/List/List';
import Container from './components/Container/Container';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <section className="landing__page">
      <Header />
      <List />
      <Container />
      <Footer />
    </section>
  );
};

export default App;
