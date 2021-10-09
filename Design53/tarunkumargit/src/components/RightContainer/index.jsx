import React from 'react';
import './_rightContainer.scss';

// profile Image
import profile from '../../images/model.jpg';

const RightContainer = () => {
  return (
    <div className="right_container">
      <div className="container">
        <header className="right_header">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
        </header>
      </div>
    </div>
  );
};

export default RightContainer;
