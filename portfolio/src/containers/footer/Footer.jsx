import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className='pf__footer section__padding' id='footer'>
      <div className='pf__footer-heading'>
        <h1 className='gradient__text'>Contact me if you're interested in my services!</h1>
      </div>

      <div className='pf__footer-form'>
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
      </div>
    </div>
  )
}

export default Footer