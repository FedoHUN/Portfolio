import React from 'react';
import './resume.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3Alt, faSquareJs, faReact, faBootstrap } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faCircleCheck, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

const Features = () => {
  return (
    <div className='pf__resume section__padding' id='resume' >
      <div className='pf__resume-timeline_container'>
        <div className='pf__journey'>
          <h1><FontAwesomeIcon className='icon' icon={faGraduationCap} />My Journey</h1>
          <div className='pf__timeline'>
            <div className='outer'>
              <div className='card'>
                <div className='info'>
                  <h3 className='title'>The Technical University of Košice</h3>
                  <p>Automotive Electronics</p>
                  <p className='date'>2022 - Present</p>
                </div>
              </div>
              <div className='card'>
                <div className='info'>
                  <h3 className='title'>SOŠ IT, Ostrovského 1 Košice</h3>
                  <p>Intelligent Systems</p>
                  <p className='date'>2018 - 2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='pf__certifications'>
          <h1><FontAwesomeIcon className='icon' icon={faCircleCheck} />Certifications</h1>
          <div className='pf__timeline'>
            <div className='outer'>
              <div className='card'>
                <div className='info'>
                  <h3 className='title'>CCNA Enterprise networking, security, and automation</h3>
                  <p className='date'>2022</p>
                </div>
              </div>
              <div className='card'>
                <div className='info'>
                  <h3 className='title'>Certificate § 21</h3>
                  <p className='date'>2022</p>
                </div>
              </div>
              <div className='card'>
                <div className='info'>
                  <h3 className='title'>Softskills course certificate</h3>
                  <p className='date'>2022</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='pf__resume-stack_container'>
        <h1><FontAwesomeIcon className='icon' icon={faLayerGroup} />Tech Stack</h1>
        <div className='pf__resume-stack_list'>
          <span></span>
          <h2><FontAwesomeIcon className='icon' icon={faHtml5} />HTML</h2>
          <h2><FontAwesomeIcon className='icon' icon={faCss3Alt} />CSS</h2>
          <h2><FontAwesomeIcon className='icon' icon={faSquareJs} />Javascript</h2>
          <h2><FontAwesomeIcon className='icon' icon={faReact} />React</h2>
          <h2><FontAwesomeIcon className='icon' icon={faBootstrap} />Bootstrap</h2>
        </div>
      </div>
    </div>
  )
}

export default Features