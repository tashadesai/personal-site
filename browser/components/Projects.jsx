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
                <img className="fl w-60-ns" src={project.image}/>
                <div className="fl w-40-ns tl-ns ph4-ns">
                  <h2 className="mt0">{project.name}</h2>
                  <p>{project.description}</p>
                  {project.deployedLink ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.deployedLink}>View Project</a> : null}
                  {project.github ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.github}>View Code</a> : null}
                  {project.talkLink ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.talkLink}>View Talk</a> :
                  null}
                </div>
              </div>
            );

            var evenDiv = (
              <div>
                <img className="fr w-60-ns" src={project.image}/>
                <div className="fl w-40-ns tr-ns ph4-ns">
                  <h2 className="mt0">{project.name}</h2>
                  <p>{project.description}</p>
                  {project.deployedLink ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.deployedLink}>View Project</a> : null}
                  {project.github ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.github}>View Code</a> : null}
                  {project.talkLink ?
                  <a className="link dim ba ph3 pv2 mb2 dib white" href={project.talkLink}>View Talk</a> :
                  null}
                </div>
              </div>
            )

            return (
              <div key={project.number} id={project.id} className="fl w-100-ns pv5 ph4">
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
