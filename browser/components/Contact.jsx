import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Contact extends Component {
  render() {
    return (
        <div id="contact" className= "fl w-100 center ph6-ns ph3-ns vh-100">
          <div className="fl w-100">
            <img id="contactTitle" className="pt5 titleImg" src='/layer-images/contact.png' />
          </div>
          <div id="contact" className= "vh-50-ns fl w-100 center ph6-ns">
            <h3>Let's chat!</h3>

            {
              this.props.contactInfo.map(contact => {
                return (
                  <div key={contact.id} id={contact.id} className="fl w-third pa2 h-100-ns">
                    <a href={contact.link}>
                      <img className="vh-25-ns" src={contact.image} />
                    </a>
                    <p>{contact.alt}</p>
                  </div>
                );
              })
            }

          </div>
        </div>
    );
  }
}

export default Contact;
