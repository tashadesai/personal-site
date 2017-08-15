import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Projects from './Projects.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Resume from './Resume.jsx';


class Content extends Component {

  render() {
    var projectDetails = [
      {
        id: 'entwine',
        name: 'Entwine',
        image: '/images/projects/entwineImg1.png',
        description: 'Entwine is a smart CMS and publishing platform that leverages natural language processing to generate multimedia web content.  Through well designed code modules, it allows content creators to easily add interactivity and rich multimedia to their stories.',
        deployedLink: 'http://entwine.herokuapp.com/',
        github: 'https://github.com/sceneweaver/entwine',
        number: 1
      },
      {
        id: 'storybookvr',
        name: 'Storybook VR',
        image: '/images/projects/storybookImg1.png',
        description: 'Storybook VR aims to bring technology and traditional storytelling together to create a fully immersive, virtual storytelling experience. The platform parses entered stories for content and tone to dynamically render unique virtual reality picture books.',
        deployedLink: undefined,
        github: 'https://github.com/tashadesai/storybook',
        number: 2
      },
      {
        id: 'monkeySee',
        name: 'Monkey See',
        image: '/images/projects/monkeyseeImg1.png',
        description: 'Monkey See is an e-commerce website selling eyeglasses.  Monkey See was built as a fully functinal e-commerce site including features such as product pages, checkout functionality, and complete CSS styling.',
        deployedLink: 'https://monkey-see.herokuapp.com/',
        github: 'https://github.com/monkey-see/graceshopper',
        number: 3
      },
      {
        id: 'techTalk',
        name: 'Technology Talk on Blockchains',
        image: 'images/projects/techtalkImg1.png',
        description: 'In this talk, I provide a brief introduction to blockchain- the structure behind Bitcoin and other cryptocurrencies. I give an overview of how blockchains work, how it has been implemented, and the benefits and possibilities of blockchain technology.',
        talkLink: 'https://www.youtube.com/watch?v=UuFyYNxS8bY&t',
        number: 4
      }
    ];

    var contactInfo = [
      {
        id: 'linkedIn',
        image: '/images/linkedin.png',
        link: 'https://www.linkedin.com/in/desainatasha/',
        alt: 'desainatasha'
      },
      {
        id: 'GitHub',
        image: '/images/github.png',
        link: 'https://github.com/tashadesai',
        alt: 'tashadesai'
      },
      {
        id: 'Email',
        image: '/images/email.png',
        link: 'mailto:tashadesai@gmail.com',
        alt: 'tashadesai@gmail.com'
      }
    ]

    return (
        <div id="content" className= "fl w-100 ph3-ns tc toBeStickied">
          <About />
          <Projects projectDetails={projectDetails} />
          <Resume />
          <Contact contactInfo={contactInfo} />
        </div>
    );
  }
}

export default Content;
