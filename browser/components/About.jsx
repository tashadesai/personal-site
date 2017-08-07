import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div id="about">
        <div className= "mw9 center ph3-ns">
          <img id="aboutTitle" className="pt5 titleImg" src='http://localhost:1337/layer-images/about.png' />
        </div>

        <div className= "mw5 mw6-ns center pt4">
          <div className="fl w-100 pa3 ph4">
            <img id="headshot" src="http://localhost:1337/images/me3.png" className= "" />
          </div>
        </div>
        <div className="fl w-100 mw9 center ph3">
          <p>Hi! I'm Natasha, a software developer based in New York.
            I'm currently a teaching fellow at Fullstack Academy of Code.
            Before that I worked in finance and marketing and I graduated with a degree in Economics from New York University.
          </p>
          <p>
            Growing up, I loved making websites.  I taught myself the basics, got ahold of a copy of photoshop and went wild.  I made the kind of ridiculous websites an eight year old would make, and I loved it. I loved deciding what I wanted to build and having to figure out how to build it, I loved the creativity of it. Since then, programming has always been something I was interested in.  After studying Economics at New York University and working in finance, I decided to go back to my childhood and what I've always loved- which led me to Fullstack Academy of Code where I spent 17 weeks learning full stack JavaScript.  Currently, I'm a teaching fellow at Fullstack Academy.
          </p>
          </div>
      </div>
    );
  }
}

export default About;
