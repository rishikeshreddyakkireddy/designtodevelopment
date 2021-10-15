import React from 'react';
import './_right.scss';

import bottle from '../../../assets/images/bottle.png';

const Right = () => {
  return (
    <div className="container__row__col2">
      <h3>
        product <span>02</span>
      </h3>
      <div className="big_text">
        <div className="circle"></div>
        Way the <br />
        Right way
        <img src={bottle} alt="bottle" />
      </div>
      <div className="subheading">
        <h2>From quilts to grey walls:</h2>
        <h2>this week's fashion</h2>
        <h2>trends</h2>
      </div>
      <div className="slider_btns">
        <i class="ri-arrow-left-s-line left"></i>
        <i class="ri-arrow-right-s-line right"></i>
      </div>
    </div>
  );
};

export default Right;
