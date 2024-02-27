import React from 'react'
import './Contact.css'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contactPageTitle"></h1>
      <span className="contactDesc"></span>
    <form action="" className="contactForm">
        <input type="text" className="name" placeholder='Yourname'/>
        <input type="text" className="email" placeholder='Your Email'/>
        <textarea name="message" cols="30" rows="5" placeholder='YourMessage' className='msg'></textarea>
    <button type="submit" value="send" className="submitBtn">Submit</button>
    <div className="links">
        <img src={linkedIn} alt="" className="link" />
        <img src={github} alt="" className="link" />
        <img src={twitter} alt="" className="link" />
        <img src={whatsapp} alt="" className="link" />
    </div>
    </form>
    </div>
  )
}

export default Contact