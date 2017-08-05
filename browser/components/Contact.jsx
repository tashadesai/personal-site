import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
        <div id="contact" className= "mw9 center ph3-ns">
          <h3 id="title">Contact</h3>
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
    );
  }
}

export default Contact;
