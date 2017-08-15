import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {
  render() {
    return (
        <div className="dt w-100 layer menu toBeStickied parallax">
          <div className="dtc v-mid tc ph3 ph4-l center allMenuButtons">
                <Link to={'/projects'} className="menuButton">PROJECTS</Link>
                <Link to={'/about'} className="menuButton">ABOUT</Link>
                <Link to={'/resume'} className="menuButton">RESUME</Link>
                <Link to={'/contact'} className="menuButton">CONTACT</Link>
          </div>
        </div>
    );
  }
}

export default Menu;
