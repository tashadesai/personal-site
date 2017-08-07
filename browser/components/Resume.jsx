import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Resume extends Component {
  render() {
    return (
      <div id="resume" className="fl w-100">
        <div className= "mw9 center ph3-ns">
          <img id="resumeTitle" className="pt5 titleImg" src='http://localhost:1337/layer-images/resume.png' />
        </div>
        <div className="fl w-100 mw9 center ph3">
          <p>This is my Resume Link</p>
          <p>
            This is my resume
          </p>
          </div>
      </div>
    );
  }
}

export default Resume;
