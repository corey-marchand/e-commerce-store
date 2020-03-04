import React from 'react';
import './footer.styles.scss';

const Footer = () => (
  <div className="footer-container">
    <div className="item-container">
      <div className="footer-sec-social-media">
        <text>SOCIAL MEDIA</text>
        <ul className="list">
          <li>Options</li>
          <li>Options</li>
          <li>Options</li>
          <li>Options</li>
        </ul>
      </div>
      <div className="customer-service-sec">
        <text>CUSTOMER SERVICE</text>
        <ul className="list">
          <li>Options</li>
          <li>Options</li>
          <li>Options</li>
          <li>Options</li>
        </ul>
      </div>
      <div className="footer-sec">
        <text>EXTRAS</text>
          <ul className="list">
            <li>Options</li>
            <li>Options</li>
            <li>Options</li>
            <li>Options</li>
          </ul>
      </div>
    </div>
  </div>
);

export default Footer;