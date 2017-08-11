import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class About extends Component {
  render() {
    return (
      <div id="about" className="fl w-100  ph6-ns">
        <div className= "mw9 center ph3-ns">
          <img id="aboutTitle" className="pt5 titleImg" src='/layer-images/about.png' />
        </div>

        {/* <div className= "center ph7-ns">

        </div> */}
        <div className= "fl w-100 center ph7-ns">
          <div id="aboutP1" className="fl w-100 center ph3-ns">
            <p className="">Hi! I'm Natasha, a <text className="boldText">software developer</text> based in <text className="boldText">New York</text>.
              Currently, I'm a <text className="boldText">teaching fellow</text> at <text className="boldText">Fullstack Academy of Code</text>.
            </p>
          </div>
           <div className="w-90-ns center">
              {/* <div id="headshot" /> */}
               <img id="headshot" src="/images/me5.png" className= "" />
          </div>
        </div>
        <div id="aboutP2" className="fl w-100-ns">
          <p>
            Growing up, I loved making websites.  I taught myself the basics, got ahold of a copy of Photoshop and went wild.  I made the kind of ridiculous websites an eight year old would make, and I loved it.  I loved deciding what I wanted to build and then having to figure out how to build it.  Since then, programming has always been something I was interested in.  After studying Economics at New York University and working in finance, I decided to go back to my childhood and what I've always loved- which led me to Fullstack Academy of Code where I spent 17 weeks in an immersive program learning full stack JavaScript.
          </p>
        </div>

      </div>
    );
  }
}

export default About;
