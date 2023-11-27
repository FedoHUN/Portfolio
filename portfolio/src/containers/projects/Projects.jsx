import React, {useEffect} from 'react';
import './projects.css';
import page1 from '../../assets/GPT3.png'
import gradient from '../../assets/gradient_img.png'
import { useInView } from "react-intersection-observer";
import { animate, motion, useAnimation } from "framer-motion";

function Section({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }else{
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ translateY: "-400px", duration: 1 }}
      variants={{
        visible: { opacity: 1, scale: 1},
        hidden: { opacity: 0, scale: 0}
      }}
    >
      {children}
    </motion.div>
  );
}

const Blog = () => {
  return (
    <div className='pf__projects section__padding gradient__bg-2' id='projects'>
      <div className='pf__projects-heading'>
        <Section>
          <h1 className='gradient__text'>My Projects</h1>
        </Section>
      </div>
      <Section>
        <div className='pf__projects-container'>
          <div className='pf__projects-container_article first-article'>
          <a href='https://fedohun.github.io/mgpt-3/' target='_blank' className='mgpt-3__anchor'>
              <img src={page1} alt='GPT3-Site' />            <span></span>
            <div className='pf__projects-container_article-content'>
              <h3>GPT-3 Page</h3>
              <p>Open Page</p>
            </div>
            </a>
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
      </Section>
    </div>
  )
}

export default Blog