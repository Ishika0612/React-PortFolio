import React from 'react'
import './Contact.css'
import { Mail ,Phone} from 'lucide-react';
import ContactIcons from '../components/ContactIcons';

const Contact = () => {

  const handleSend = () => {
  const name = document.querySelector('input[name="name"]').value;
  const email = document.querySelector('input[name="email"]').value;
  const message = document.querySelector('textarea[name="message"]').value;
 if(name!="" && email!="" && message!=""){
  window.location.href = `mailto:kaushikishika263@gmail.com?subject=Message from ${name}&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
 document.querySelector('input[name="name"]').value=""
  document.querySelector('input[name="email"]').value=""
  document.querySelector('textarea[name="message"]').value=""
 }
};

  return (
    <>
    <div className='contactdiv'>
        <h2>Contact Me</h2>
        <div className='contactcontent'>
            <div className='msgsend'>
                <input className='inp' type='text' name="name" placeholder='Name' autoFocus required/>
                <input className='inp' type='email'name="email" placeholder='Email' required/>
                <textarea className='inp area'name="message" placeholder='Type your Message...' required/>
                <button onClick={handleSend} type='submit'>Send</button>
            </div>
            <ContactIcons/>
            <div className='contactinfo'>
                <div>
              <div> <span> <Phone size={20} /></span> <p>:</p> </div>
                 <a href="tel:+918979461109">+918979461109</a>
                 </div>
                 <div>
              <div> <span> <Mail size={20} /> </span> <p>:</p> </div> 
                <a href="mailto:kaushikishika263@gmail.com"> kaushikishika263@gmail.com</a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact