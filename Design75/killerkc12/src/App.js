import './App.css';
import logo from './Assets/symbol.png'
import shoe from './Assets/shoe.png'
import { BsCart4 } from 'react-icons/bs';
import { AiOutlineArrowRight, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'
import { TiSocialInstagram } from 'react-icons/ti'

function App() {
  return (
    <div className="app">
      <div className="one">
        <div className="left"></div>
        <div className="right"></div>
      </div>
      <div className="two">
        <div className="top">
          <div className="top__left">
            <img src={logo} alt="logo" />
            <p>Rebook</p>
          </div>
          <div className="top__center">
            <div className="running">
              <p>RUNNING</p>
            </div>
            <div className="running">
              <p>CROSSFIT</p>
              <div className="line"></div>
            </div>
            <div className="running">
              <p>TRAINING</p>
            </div>
          </div>
          <div className="top__right">
            <div className="cart__top">
              <div className="cart">
                <BsCart4 className="cart__logo"/>
              </div>
              <p>2</p>
            </div>
            <div className="cart__bottom">
              <p>CART</p>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="back__card">
            <div className="back__card__left">
              <div className="share">
                <p>SHARE</p>
              </div>
              <div className="social__icons">
                <FaFacebookF className="social__icon"/>
              </div>
              <div className="social__icons">
                <AiOutlineTwitter className="social__icon"/>
              </div>
              <div className="social__icons">
                <TiSocialInstagram className="social__icon"/>
              </div>
            </div>
            <div className="back__card__right">
              <p className="header">DESIGNED BY CROSSFITTERS FOR CROSSFITTERS</p>
              <p>
                Discover the latest edition of the best CrossFit shoe. the Nano ?.
                It retains a natural shape and stablizing plus offers even more flexiblity and grip. The addition to the heed stablizes the supports for weightlifting movements.
              </p>
              <button>MORE INFO</button>
              <div className="add__to__cart">
                <button>ADD TO CART <AiOutlineArrowRight className="right__arrow"/> </button>
              </div>
            </div>
          </div>
          <div className="front__card">
            <p>REEBOK CROSSFIT NANO 7</p>
            <div className="front__card__bottom">
              <p>129,95€</p>
            </div>
          </div>
          <img src={shoe} alt="shoe" className="shoe__image" />
        </div>
      </div>
    </div>
  );
}

export default App;
