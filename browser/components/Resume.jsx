import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Resume extends Component {
  render() {
    return (
      <div id="resume" className="fl w-100 ph6-ns">
        <div className= "mw9 center ph3-ns">
          <img id="resumeTitle" className="pt5 titleImg" src='/layer-images/resume.png' />
        </div>
        <div className="fl w-100 center ph3-ns">
          <p>Download my resume</p>
          <embed id="embededPDF" className="fl w-100" type="application/pdf" src="/other-assets/Natasha Desai Resume PDF.pdf" width="640" height="480" />
          </div>
      </div>
    );
  }
}

export default Resume;
