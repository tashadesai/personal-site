import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class Projects extends Component {
  render() {
    return (
      <div id="projects" className="fl w-100 ph6-ns">

        <div id="projectsTitle" className= "mw9 center ph3-ns">
          <img className="pt5 titleImg" src='/layer-images/projects.png' />
        </div>

        {
          this.props.projectDetails.map(project => {
            var oddDiv = (
              <div>
                <img className="fl w-60" src={project.image}/>
                <div className="fl w-40 tl-ns ph4-ns">
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            )

            var evenDiv = (
              <div>
                <img className="fr w-60" src={project.image}/>
                <div className="fl w-40 tr-ns ph4-ns">
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                </div>
              </div>
            )

            return (
              <div key={project.number} id={project.id} className="fl w-100-ns pa4 ph4">
                {project.number % 2 === 0 ? evenDiv : oddDiv}
              </div>
            )
          })
        }

      </div>
    );
  }
}

export default Projects;
