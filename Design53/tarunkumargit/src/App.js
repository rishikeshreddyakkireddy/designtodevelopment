import React from 'react';
import './App.scss';

// Components
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';

const App = () => {
  return (
    <section className="page_wrapper">
      <LeftContainer />
      <RightContainer />
    </section>
  );
};

export default App;
