
import React from 'react';
import Menu from 'react-responsive-navbar';
import { BrowserRouter as Router, Link } from "react-router-dom";

export default class Header extends React.Component {
  render() {
    return (
      <Menu
        menuOpenButton={<div />}
        menuCloseButton={<div />}
        changeMenuOn="768px"
        largeMenuClassName="desktop-menu"
        smallMenuClassName="mobile-menu"
        menu={
          <ul>
            {this.renderNavItems()}
          </ul>
        }
      />
    );
  }
  renderNavItems() {
    const navItems = ['Home', 'Conferences', 'Expo', 'Our Partners', 'Venue', 'Competitions', 'Press Louge', 'Book Online', 'Blog'];
    return navItems.map((navItem, idx) => <Router key={idx}><li><Link to={navItem.replace(' ', '-').toLocaleLowerCase()}>{navItem}</Link></li></Router>);
  }
}