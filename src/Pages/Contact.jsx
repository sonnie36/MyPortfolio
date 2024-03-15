import React from 'react'
import { useRef, useState } from 'react'
import './Contact.css'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import whatsapp from '../assets/whatsapp.png'
import Footer from '../Components/Footer'
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [username, setUsername] = useState("")
  const[email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true)

    emailjs
      .sendForm('service_98uvviu', 'template_ow3wzpm', form.current, {
        publicKey: 'UTMEgpY0x0fo7dhKZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

      setEmail("")
      setMessage("")
      setUsername("")

      setTimeout(() => {
        setLoading(false)
      }, 6000);
  
  }
  return (
    <div id="contact">
      <h1 className="contactPageTitle"></h1>
      <span className="contactDesc"></span>
    <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
        <input type="text" className="name" name="username" placeholder='Your name' onChange={e=>setUsername(e.target.value)}/>
        <input type="text" className="email" name="email" placeholder='Your Email' onChange={e=>setEmail(e.target.value)}/>
        <textarea name="message" cols="30" rows="5" placeholder='Your Message' className='msg' onChange={e=>setMessage(e.target.value)}></textarea>
    {loading?<button className="submitBtn" id="loadingBtn"><i className="fa fa-circle-o-notch fa-spin"></i> Sending</button>:<button type="submit" value="send" className="submitBtn">Submit</button>}
    <div className="links">
        <a href="https://www.linkedin.com/in/salome-mwati-813501263/"><i className="fa fa-linkedin link"></i></a>
        <a href="https://github.com/sonnie36"><i className="fa fa-github link"></i></a>
        <a href=""><i className="fa fa-twitter link"></i></a>
        <a href=""><i className="fa fa-whatsapp link"></i></a>
    </div>
    </form>
    {/* <Footer/> */}
    </div>
  )
}

export default Contact