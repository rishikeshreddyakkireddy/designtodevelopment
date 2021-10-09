import React from 'react';
import './_rightContainer.scss';

// profile Image
import profile from '../../images/model.jpg';
import SliderButton from './SliderButton';

const RightContainer = () => {
  return (
    <div className="right_container">
      <div className="container">
        <header className="right_header">
          <div className="profile">
            <img src={profile} alt="" />
          </div>
        </header>
        <div style={{ height: '65vh' }}></div>
        <SliderButton />
      </div>
    </div>
  );
};

export default RightContainer;
