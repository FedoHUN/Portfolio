import React from 'react';
import './footer.css';
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: false, margin: "-100px 0px -100px 0px"});

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(300px)",
          opacity: isInView ? 1 : 0,
          transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

const Footer = () => {
  return (
    <div className='pf__footer section__padding' id='footer'>
      <div className='pf__footer-heading'>
        <Section>
          <h1 className='gradient__text'>Contact me if you're interested in my services!</h1>
        </Section>
      </div>

      
        <div className='pf__footer-form'>
        <Section>
          <form action="https://formsubmit.co/fedohun@gmail.com" method="POST">
            <div class="form__details">
              <div className='form__details-name'>
                <input className='form__inputM' type="text" name="name" placeholder='Name' required />
              </div>
              <div className='form__details-email'>
                <input className='form__inputM' type="email" name="email" placeholder='Email' required />
              </div>
            </div>
            <div className='form__message'>
              <textarea className='form__inputL' rows='5' name="message" placeholder='Message' required />
            </div>
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="http://localhost:3000/" />
            <input type="hidden" name="_subject" value="New submission!" />
            <button type="submit">Send</button>
          </form>
          </Section>
        </div>
    </div>
  )
}

export default Footer