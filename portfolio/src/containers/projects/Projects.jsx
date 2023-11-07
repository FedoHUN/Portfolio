import React from 'react';
import './projects.css';
import page1 from '../../assets/GPT3.png'
import gradient from '../../assets/gradient_img.png'

const Blog = () => {
  return (
    <div className='pf__projects section__padding gradient__bg-2' id='projects'>
      <div className='pf__projects-heading'>
        <h1 className='gradient__text'>My Projects</h1>
      </div>
      <div className='pf__projects-container'>
        <div className='pf__projects-container_article'>
            <img src={page1} alt='GPT3-Site' />            <span></span>
          <div className='pf__projects-container_article-content'>
            <h3>GPT-3 Page</h3>
            <p>Open Page</p>
          </div>
        </div>
        <div className='pf__projects-container_article'>
            <img src={gradient} alt='gradient' />
            <div className='coming'>
              <h1>Coming Soon...</h1>
            </div>
            <span></span>
          <div className='pf__projects-container_article-content'>
            <h3>Next Project</h3>
            <p>Coming Soon...</p>
          </div>
        </div>
        <div className='pf__projects-container_article'>
          <div className='pf__projects-container_article-image'>
            <img src={gradient} alt='gradient' />
            <div className='coming'>
              <h1>Coming Soon...</h1>
            </div>
            <span></span>
          </div>
          <div className='pf__projects-container_article-content'>
            <h3>Next Project</h3>
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog