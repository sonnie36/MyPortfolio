import React from 'react'
import Navbar from '../Components/Navbar'
import './About.css'
import profile from '../assets/me.jpg'

const About = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <div className="about">
            <div>
              <img src={profile} alt="" className="profile" />
            </div>
            
            <div className="aboutMe">
            <h2 className='abtHead'>About Me</h2>
                <p className="aboutDesc">In the dynamic realm of digital experiences,I seamlessly blend the expertise of front-end web development with the creative flair of UI/UX design.
                My journey is guided by an insatiable hunger for learning, an ethos that propels me to explore the depths of innovation relentlessly. <br/> In the realm of UI/UX design, I delve into the complexities of design thinking, intertwining user-centric solutions by meticulously crafting prototypes, user flows, and narratives imbued with authenticity. Every project becomes a journey, where empathy converges with ingenuity to create experiences that surpass the mundane.
                <br/>In the world of web development, my proficiency spans the spectrum, from the foundational languages of HTML and CSS to the dynamic landscapes of JavaScript and React.
                Traversing this ever-evolving landscape of technology and creativity, I remain steadfast in my commitment to not just meet expectations, but to surpass them, leaving an indelible mark on every project, every team, and every interaction.
                Join me on this voyage of discovery, where each line of code and every pixel holds the promise of a new adventure, and together, let's redefine what's possible in the digital realm.
                </p>
            </div>

        </div>
    </div>
  )
}


export default About