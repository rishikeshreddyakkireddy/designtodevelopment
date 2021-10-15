import React from 'react';
import './_list.scss';

const List = () => {
  return (
    <div className="landing__page__list">
      <h3>cyclists</h3>
      <h3>Runners</h3>
      <h3>swimmers</h3>
      <h3>Boxer</h3>
      <div className="dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
};

export default List;
