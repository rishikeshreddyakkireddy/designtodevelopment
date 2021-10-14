import React from 'react';
import './App.scss';

import cup from './images/cup.png';

// Components
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import Footer from './components/LeftContainer/Footer';

const App = () => {
  return (
    <section className="page_wrapper">
      <div className="tea_container">
        <div className="inner_tea_container">
          <div className="cup_text">cappuccino</div>
          <div className="cup_img">
            <img src={cup} alt="" />
          </div>
          <div className="search_container">
            <input type="text" placeholder="Search?" />
            <button>
              <i class="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
      <LeftContainer />
      <RightContainer />
    </section>
  );
};

export default App;
