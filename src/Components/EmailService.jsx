import React, { useState,useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailService.css';
import { ModeContext } from '../Context/ModeContext';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

export const EmailService = () => {
  
    let ModeInfo=useContext(ModeContext);
    const [isLoading, setIsLoading] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true); 
    toast.loading('Sending email...', { id: 'loading' });
   

    emailjs
      .sendForm('service_x8xmvk7', 'template_kxq1sv9', form.current, {
        publicKey: 'sXU_p82GiLNFqHMOA',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          toast.dismiss('loading'); 
          toast.success('Email sent successfully!', { duration: 4000 }); 
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.dismiss('loading'); // Remove loading toast
      toast.error('Failed to send email. Please try again.', { duration: 4000 });
        },
      );
      setIsLoading(false); 
  };

  return (
    <div style={{backgroundColor:ModeInfo.isDark?"#202020":"#f3f3f3"}} className='email-maindiv'>
        <h2 className='underline-effect-container' style={{textAlign:"center",marginTop:"2rem"}}>Send me Mail</h2>
    <form style={{display:"flex",flexDirection:"column",alignItems:"center"}} ref={form} onSubmit={sendEmail}>
      <label className='lbl'>Name</label>
      <input  type="text" name="from_name" placeholder='eg . John' required/>
      <label className='lbl'>Email</label>
      <input type="email" name="user_email" placeholder='eg . John123@gmail.com' required/>
      <label className='lbl'>Message</label>
      <textarea style={{width:"100%"}} name="message" placeholder='Write Your Message here....' required/>
      <input disabled={isLoading} className='submit-btn' type="submit" value="Send" />
    </form>
    </div>
  );
};

export default EmailService;