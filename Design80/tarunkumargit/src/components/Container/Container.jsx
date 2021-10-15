import React from 'react';
import './_container.scss';

// Components
import Left from './Left/Left';
import Right from './Right/Right';

const Container = () => {
  return (
    <div className="container">
      <div className="container__row">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default Container;
