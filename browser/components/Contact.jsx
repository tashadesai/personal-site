import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
        <div id="contact" className= "fl w-100 mw9 center ph3-ns">
          <img id="contactTitle" className="pt5 titleImg" src='http://localhost:1337/layer-images/contact.png' />

          <div id="contact" className= "mw9 center ph3-ns">
            <div id="email" className="fl w-25 pa2">
              <p>Email</p>
            </div>
            <div id="github" className="fl w-25 pa2">
              <p>GitHub</p>
            </div>
            <div id="linkedIn" className="fl w-25 pa2">
              <p>LinkedIn</p>
            </div>
            <div id="twitter" className="fl w-25 pa2">
              <p>Twitter</p>
            </div>
          </div>
        </div>
    );
  }
}

export default Contact;
