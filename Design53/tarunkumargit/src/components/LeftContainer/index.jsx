import React from 'react';
import './_leftContainer.scss';

const LeftContainer = () => {
  return (
    <div className="left_container">
      <div className="container">
        <header className="left_header">
          <div className="mug_icon">
            <i class="fas fa-mug-hot"></i>
          </div>
          <ul className="menu_list">
            <li>Home</li>
            <li>About</li>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default LeftContainer;
