import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';


class Content extends Component {
  render() {
    return (
        <div id="content" className= "fl w-100">
          <About />
          <Projects />
          <Contact />
        </div>
    );
  }
}

export default Content;
