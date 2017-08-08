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
        name: 'entwine',
        image: 'http://localhost:1337/images/projects/entwineImg1.png',
        description: 'entwine is a smart CMS and publishing platform.  Inspired by recent award-winning projects like Bloomberg’s “What Is Code?” and the Huffington Post’s “America’s Most Admired Lawbreaker”, Entwine allows content creators to easily add interactivity and rich multimedia to their stories. Our smart text editor leverages natural language processing to parse a creator’s story and recommend a set of add-ons. The editor then generates fully-featured interactive maps, references for specific characters and high-quality header images.',
        deployedLink: 'http://entwine.herokuapp.com/',
        github: 'https://github.com/sceneweaver/entwine'
      },
      {
        id: 'storybookvr',
        name: 'StorybookVR',
        image: 'http://localhost:1337/images/projects/storybookImg1.png',
        description: 'Storybook VR is a twist on how we tell stories- it aims to bring technology and traditional storytelling together to create a fully immersive, virtual storytelling experience. The platform dynamically creates virtual reality picture books for any story you may want to tell.The story entered will first be parsed for content, tone, and characters. Storybook VR then creates a unique virtual reality scene using those elements, texts, and visuals to inform how the VR scene looks and help tell the story. Each story takes place in a fully immersive, 3D virtual reality environment.',
        deployedLink: '',
        github: 'https://github.com/tashadesai/storybook'
      },
      {
        id: 'monkeySee',
        name: 'Monkey See',
        image: 'http://localhost:1337/images/projects/monkeyseeImg1.png',
        description: 'Monkey See is an e-commerce website',
        deployedLink: '',
        github: ''
      }
      // ,
      // {
      //   id: 'personalSite',
      //   name: 'Personal Site',
      //   image: 'https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a',
      //   description: 'this here!',
      //   deployedLink: '',
      //   github: 'https://github.com/tashadesai/personal-site'
      // }
    ];

    var contactInfo = [
      {
        id: 'linkedIn',
        image: 'http://localhost:1337/images/linkedin.png',
        link: 'https://www.linkedin.com/in/desainatasha/',
        alt: 'desainatasha'
      },
      {
        id: 'GitHub',
        image: 'http://localhost:1337/images/github.png',
        link: 'https://github.com/tashadesai',
        alt: 'tashadesai'
      },
      {
        id: 'Email',
        image: 'http://localhost:1337/images/email.png',
        link: '',
        alt: 'tashadesai@gmail.com'
      }
    ]

    return (
        <div id="content" className= "fl w-100">
          <About />
          <Projects projectDetails={projectDetails} />
          <Resume />
          <Contact contactInfo={contactInfo} />
        </div>
    );
  }
}

export default Content;
