import React from 'react'
import Navbar from '../Components/Navbar'
import './About.css'
import profile from '../assets/me.jpg'

const About = () => {
  return (
    <div>

        <div className="about">
            <div>
              <img src={profile} alt="" className="profile" />
            </div>
            
            <div className="aboutMe">
            <h2 className='abtHead'>About Me</h2>
                <p className="aboutDesc">
                In the dynamic world of digital experiences, I seamlessly integrate the expertise of front-end web development with the creative flair of UI/UX design. <br/> 
                Fueled by an insatiable hunger for learning, my journey propels me to explore the depths of innovation relentlessly.<br/>
                Within the realm of UI/UX design, I delve into the complexities of design thinking, intertwining user-centric solutions by meticulously crafting prototypes, user flows, and narratives imbued with authenticity. Each project becomes a journey, where empathy converges with ingenuity to create experiences that surpass the mundane.<br/>
                In the realm of web development, my proficiency spans the spectrum, from the foundational languages of HTML and CSS to the dynamic landscapes of JavaScript and React.<br/>
                Traversing this ever-evolving landscape of technology and creativity, my commitment remains steadfast: not merely to meet expectations, but to surpass them, leaving an indelible mark on every project, team, and interaction.<br/>
                </p>
            </div>

        </div>
    </div>
  )
}


export default About