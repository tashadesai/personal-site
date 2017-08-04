import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Menu extends Component {
  render() {
    return (
        <div className="layer menu toBeStickied parallax" data-depth="1.00">
          <ul className="allMenuButtons">
              <li className="menuButton">
                <h2>PROJECTS</h2>
              </li>
              <li className="menuButton">
                <h2>ABOUT</h2>
              </li>
              <li className="menuButton">
                <h2>RESUME</h2>
              </li>
              <li className="menuButton">
                <h2>CONTACT</h2>
              </li>
          </ul>
        </div>
    );
  }
}

export default Menu;
