import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Projects extends Component {
  render() {
    return (
      <div id="projects" className="fl w-100">

        <div id="projectsTitle" className= "mw9 center ph3-ns">
          <img className="pt5 titleImg" src='/layer-images/projects.png' />
        </div>

        {
          this.props.projectDetails.map(project => {
            return (
              <div key={project.id} id={project.id} className="fl w-100-ns pa3 ph4">
                <p>{project.name}</p>
                  <img className="w-70" src={project.image}/>
                <p>{project.description}</p>
              </div>
            )
          })
        }

      </div>
    );
  }
}

export default Projects;
