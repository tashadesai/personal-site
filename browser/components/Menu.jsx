import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {
  render() {
    return (
        <div className="dt w-100 layer menu toBeStickied parallax" data-depth="1.00">
          <div className="dtc v-mid tc ph3 ph4-l center allMenuButtons">
                <Link to={'/projects'} className="menuButton">PROJECTS</Link>
                {/* <h2>PROJECTS</h2> */}
                <Link to={'/about'} className="menuButton">ABOUT</Link>
                <Link to={'/resume'} className="menuButton">RESUME</Link>
                <Link to={'/contact'} className="menuButton">CONTACT</Link>
          </div>
        </div>
    );
  }
}

export default Menu;
