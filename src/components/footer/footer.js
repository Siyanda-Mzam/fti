import StickyFooter from 'react-sticky-footer';
import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <StickyFooter
        bottomThreshold={500}
        normalStyles={{
          backgroundColor: "#000",
          padding: "2rem"
        }}
        stickyStyles={{
          backgroundColor: "#000",
          padding: "2rem"
        }}
      >
        <div className="footer-head">AFRICA FASHIONTECH INDABA</div>
        <div className="footer-content-container">
          <div className="footer-items">
            <a href="mailto:info@sianderholding.co.za">info@sianderholding.co.za</a>
            <a href="tel:1234567890">123-456-7890 123-456-7890</a>
            <div className="address">Building A1, The Braides Office Park, 113 Bowling Avenue, Gallo Manor - Sandton- 2191</div>
            <div className="copywrite">©2016 SIANDER HOLDINGS (PTY) LTD - FASHIONTECH INDABA</div>
          </div>
        </div>
      </StickyFooter>
    );
  }
}