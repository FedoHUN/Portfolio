import React from 'react';
import './about.css';
import aboutMe from '../../assets/me.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faPhone, faEnvelope, faCode, faMicrochip, faMusic, faBook } from "@fortawesome/free-solid-svg-icons";



const about = () => {
  return (
    <div className='pf__about section__padding' id="about">
      <div className='pf__about-image'>
        <div className='gradient__border'>
          <img src={aboutMe} alt='Me' />
        </div>
      </div>
      <div className='pf__about-content'>
        <div className='pf__about-heading'>
        <div className='h1__corner'>
          <h1 className='gradient__text'>About Me</h1>
          </div>
          <p>My name is Máté Vojtko, although you can call me Matthew. I've called Košice home for the past five years, ever since my high school days at SOŠ IT, Ostrovského 1. It was during those formative years that I discovered my passion for programming, with a strong inclination towards Front-end development. Currently, I'm pursuing a degree in programming and automotive electronics at the Technical University of Košice. My aspiration is to excel as a web developer, dedicating myself to daily learning and constant self-improvement. I am committed to delivering innovative and user-centric web solutions that meet the evolving needs of the digital world.
          </p>
        </div>
        <div className='pf__about-contact'>
          <div className='pf__about-contact_title'>
            <h2><FontAwesomeIcon className='icon' icon={faUser} style={{color: "#4ac2ed",}} />Name:</h2>
            <h2><FontAwesomeIcon className='icon' icon={faPhone} style={{color: "#4ac2ed",}} />Phone:</h2>
            <h2><FontAwesomeIcon className='icon' icon={faEnvelope} style={{color: "#4ac2ed",}} />Email:</h2>
          </div>
          <div className='pf__about-contact_text'>
            <p>Máté Vojtko</p>
            <p>+421944357272</p>
            <p>fedohun@gmail.com</p>
          </div>
        </div>
        <div className='pf__about-interests'>
          <h1 className='gradient__text'>Interests</h1>
          <div className='pf__about-interests_container'>
            <h2><FontAwesomeIcon className='icon' icon={faCode} style={{color: "#4ac2ed",}} />Coding</h2>
            <h2><FontAwesomeIcon className='icon' icon={faMicrochip} style={{color: "#4ac2ed",}} />Tech</h2>
            <h2><FontAwesomeIcon className='icon' icon={faMusic} style={{color: "#4ac2ed",}} />Music</h2>
            <h2><FontAwesomeIcon className='icon' icon={faBook} style={{color: "#4ac2ed",}} />Reading</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default about