import React from 'react';
import './_leftContainer.scss';

// Components
import Header from './Header';
import TextContainer from './TextContainer';
import Footer from './Footer';

const LeftContainer = () => {
  return (
    <div className="left_container">
      <div className="container">
        <Header />
        <TextContainer />
        <Footer />
      </div>
    </div>
  );
};

export default LeftContainer;
