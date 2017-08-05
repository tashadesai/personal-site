import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div>
        <div id="about" className= "mw5 mw6-ns center pt4">
          <h3 id="title">About</h3>
          <div className="aspect-ratio aspect-ratio--4x3 mb4">
            <p>PICTURE</p>
            <div id="headshot" className= "aspect-ratio--object cover" />
          </div>
        </div>
        <div className="mw9 center ph3-ns">
            <p>WORDS info info info kill me now info info info info kill me now info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info
            info info info kill me now info info info info kill me now info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info
            info info info kill me now info info info info kill me now info</p>
          </div>
      </div>
    );
  }
}

export default About;
