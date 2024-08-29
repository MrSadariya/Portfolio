import React, { useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailService.css';
import { ModeContext } from '../Context/ModeContext';

export const EmailService = () => {
  
    let ModeInfo=useContext(ModeContext);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x8xmvk7', 'template_kxq1sv9', form.current, {
        publicKey: 'sXU_p82GiLNFqHMOA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div style={{backgroundColor:ModeInfo.isDark?"#0A0A0A":"#f3f3f3"}} className='email-maindiv'>
        <h2 className='underline-effect-container' style={{textAlign:"center",marginTop:"2rem"}}>Send me Mail</h2>
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input style={{border:ModeInfo.isDark?"1px solid white":"1px solid black"}} type="text" name="from_name" placeholder='eg . John' required/>
      <label>Email</label>
      <input type="email" name="user_email" placeholder='eg . John123@gmail.com' required/>
      <label>Message</label>
      <textarea name="message" placeholder='Write Your Message here....' required/>
      <input className='submit-btn' type="submit" value="Send" />
    </form>
    </div>
  );
};

export default EmailService;