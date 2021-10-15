import React from 'react';
import './_container.scss';

// images
import model from '../../assets/images/img.png';
import bottle from '../../assets/images/bottle.png';

const Container = () => {
  return (
    <div className="container">
      <div className="container__row">
        <div className="container__row__col1">
          <h3>
            <span>01</span>wecreateforyou
          </h3>
          <div className="big_text">
            <div className="bg__circle"></div>
            Create
            <img src={model} alt="" />
          </div>
          <div className="subheading">
            <h2>Pueraria Mirifica And Study</h2>
            <h2>Phyto Estrogens</h2>
          </div>
          <div className="shop_btns">
            <button className="shop">openshop</button>
            <button className="info">
              <h6>Productinformation</h6>
            </button>
          </div>
        </div>

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
      </div>
    </div>
  );
};

export default Container;
