import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div id="about" className="fl w-100">
        <div className= "mw9 center ph3-ns">
          <img id="aboutTitle" className="pt5 titleImg" src='/layer-images/about.png' />
        </div>

        <div className= "center ph7-ns">
          <div className="fl w-30 pa3 ph4">
             <img id="headshot" src="/images/me.png" className= "" />
          </div>
          <div className="fl w-70 center pv6-ns">
            <p>Hi! I'm Natasha, a <text className="boldText">software developer</text> based in <text className="boldText">New York</text>.
              Currently, I'm a <text className="boldText">teaching fellow</text> at <text className="boldText">Fullstack Academy of Code</text>.
            </p>
          </div>
        </div>
        <div className="fl w-100-ns">
          <p>
            Growing up, I loved making websites.  I taught myself the basics, got ahold of a copy of photoshop and went wild.  I made the kind of ridiculous websites an eight year old would make, and I loved it. I loved deciding what I wanted to build and having to figure out how to build it. Since then, programming has always been something I was interested in.  After studying Economics at New York University and working in finance, I decided to go back to my childhood and what I've always loved- which led me to Fullstack Academy of Code where I spent 17 weeks learning full stack JavaScript.
          </p>
        </div>

      </div>
    );
  }
}

export default About;
