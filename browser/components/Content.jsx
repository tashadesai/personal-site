import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';


class Content extends Component {

  render() {
    var projectDetails = [
      {
        id: 'entwine',
        name: 'entwine',
        image: 'https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a',
        description: 'info info info kill me now info info info info kill me now info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info kill me now info info info info kill me now info'
      },
      {
        id: 'storybookvr',
        name: 'StorybookVR',
        image: 'https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a',
        description: 'info info info kill me now info info info info kill me now info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info kill me now info info info info kill me now info'
      },
      {
        id: 'monkeySee',
        name: 'Monkey See',
        image: 'https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a',
        description: 'info info info kill me now info info info info kill me now info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info kill me now info info info info kill me now info'
      },
      {
        id: 'personalSite',
        name: 'Personal Site',
        image: 'https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a',
        description: 'info info info kill me now info info info info kill me now info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info info kill me now info info info info kill me now info'
      }
    ];

    return (
        <div id="content" className= "fl w-100">
          <About />
          <Projects projectDetails={projectDetails}/>
          <Contact />
        </div>
    );
  }
}

export default Content;
