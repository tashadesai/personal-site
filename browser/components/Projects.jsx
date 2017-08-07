import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Projects extends Component {
  render() {
    return (
      <div id="projects" className="fl w-100">

        <div id="projectsTitle" className= "mw9 center ph3-ns">
          <img className="pt5 titleImg" src='http://localhost:1337/layer-images/projects.png' />
        </div>

        <div id="entwine" className="fl w-100 w-50-ns pa3 ph4">
          <p>entwine</p>
            <img className="w-70" src="https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a"/>
          <p>info info info kill me now info info info info kill me now info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info info
            info info info info info info info info info info info info info info info
            info info info kill me now info info info info kill me now info
          </p>
        </div>
        <div id="storybookvr" className="fl w-100 w-50-ns pa3 ph4">
          <p>storybookvr</p>
          <img className="w-70" src="https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a"/>
          <p>info info info kill me now info info info info kill me now info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info
          info info info kill me now info info info info kill me now info
          </p>
        </div>
        <div id="monkeySee" className="fl w-100 w-50-ns pa3 ph4">
          <p>monkey see</p>
          <img className="w-70" src="https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a"/>
          <p>info info info kill me now info info info info kill me now info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info
          info info info kill me now info info info info kill me now info
          </p>
        </div>
        <div id="personalSite" className="fl w-100 w-50-ns pa3 ph4">
          <p>This site</p>
          <img className="w-70" src="https://i.redditmedia.com/jtMkmkpkCaqfSqcQcTRE4WgDeg-liWzYllSmjuhYYbQ.jpg?w=560&s=1df2e77cad32174b18e4cbe6f8d3c83a"/>
          <p>info info info kill me now info info info info kill me now info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info info
          info info info info info info info info info info info info info info info
          info info info kill me now info info info info kill me now info
          </p>
        </div>

      </div>
    );
  }
}

export default Projects;
