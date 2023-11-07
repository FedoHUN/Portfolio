import React from 'react';
import Typewriter from "typewriter-effect";
import './header.css';
import profile from '../../assets/suit.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div className='pf__header section__padding' id='home'>
      <div className='pf__header-content'>
        <h1 className=''><Typewriter
        options={{
          loop: true,
        }}
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Hello, my name is Máté!")
                        .pauseFor(1500)
                        .deleteAll()
                        .typeString("Welcome to my portfolio page!")
                        .pauseFor(1000)
                        .start();
                }}
            /></h1>
        <p className='fade-in'>I am a junior Front-end developer from Slovakia. I can make your stunning web designs and ideas real by coding them.</p>
        <div className='pf__header-content__buttons fade-in'>
          <a href='#footer'>Contact me</a>
          <a><FontAwesomeIcon className='icon' icon={faDownload} />Download CV</a>
        </div>
      </div>  

      <div className='pf__header-image fade-in'>
        <img src={profile} alt='profile' />
      </div>
      <div className='down-arrow'></div>
    </div>
  )
}

export default Header