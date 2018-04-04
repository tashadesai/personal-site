import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div id="about" className="fl w-100  ph6-ns pb4-ns">
        <div className= "mw9 center ph3-ns">
          <img id="aboutTitle" className="pt5 titleImg" src='/layer-images/about.png' />
        </div>
        <div className= "fl w-100 center">
          <div id="aboutP1" className="fl w-100-ns center ph3-ns">
            <p>Hi! I'm Natasha, a <text className="boldText">software developer</text> based in <text className="boldText">New York</text>. <br />
              Currently, I'm a <text className="boldText">teaching fellow</text> at <text className="boldText">Fullstack Academy of Code</text>.
            </p>
          </div>
        </div>
        <div className="w-70-ns center">
          {/* <div id="headshot" /> */}
          <img id="headshot" src="/images/me5.png" className= "" />
        </div>
        <div id="aboutP2" className="fl w-100-ns">
          <p>
            Growing up, I loved building websites.  I taught myself the basics, got ahold of a few Geocities domains and went wild.  I made the kind of ridiculous websites an eight year old would make- and I was enthralled.  Since then, programming has always been something I was interested in.  After studying Economics at New York University and working in finance, I decided to go back to my childhood and what I’ve always loved.  This led me to Fullstack Academy of Code where I spent 17 weeks learning full stack JavaScript.
            {/*while working in finance I realized how much of the world was rooted in programming and software development  */}
          </p>
        </div>

      </div>
    );
  }
}

export default About;
