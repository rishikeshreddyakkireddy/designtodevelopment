import React from 'react';
import './_footer.scss';

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__left">
          <h6>Scrolling</h6>
          <div className="line"></div>
        </div>
        <div className="footer__right">
          <h6>Shared 345 people</h6>
          <i class="ri-share-line"></i>
        </div>
      </footer>
    </>
  );
};

export default Footer;
