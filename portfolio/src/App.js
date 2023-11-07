import React from 'react'

import { Footer, Projects, About, Resume, Header } from './containers';
import {Navbar} from './components';
import './App.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGit, faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const App = () => {
  return (
    <div className='App'>
      <div className='sidebar'>
        <a href='https://www.facebook.com/mate.vojtko.94/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faFacebook} /></a>
        <a href='https://www.instagram.com/fedohun/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faInstagram} /></a>
        <a href='https://www.linkedin.com/in/m%C3%A1t%C3%A9-vojtko-40264925a/' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faLinkedin} /></a>
        <a href='https://github.com/FedoHUN' target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className='icon' icon={faGithub} /></a>
      </div>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Resume />
      <Projects />
      <Footer />
    </div>
  )
}

export default App