import React from 'react';
import './_left.scss';

// images
import model from '../../../assets/images/img.png';

const Left = () => {
  return (
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
  );
};

export default Left;
