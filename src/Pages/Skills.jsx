import React from 'react'
import './Skills.css'
import img from '../assets/science.png'
import js from '../assets/js.png'
import design from '../assets/ui-ux.png'
import htmlPic from '../assets/html-5.png'
import cssPic from '../assets/css.png'

const Skills = () => {
  return (
    <div>
        <div className="Skill">
            <h2 className='abtSkills'>Skills</h2>
              <div className="percentSkill">
              <div className="cards">
                  <img src={design} alt="" className="img" />
                <div className='percent'>
                  <h3>UI/UX Design</h3>
                  <p className="num">80%</p>
                </div>
              </div>
              <div className="cards">
                  <img src={htmlPic} alt="" className="img" />
                <div className='percent'>
                <h3>HTML 5</h3>
                  <p className="num">90%</p>
                </div>
              </div>
              <div className="cards">
                  <img src={cssPic} alt="" className="img" />
                <div className='percent'>
                <h3>CSS 3</h3>
                  <p className="num">90%</p>
                </div>
              </div>
              <div className="cards">
                  <img src={js} alt="" className="img" />
                <div className='percent'>
                <h3>JavaScript</h3>
                  <p className="num">70%</p>
                </div>
              </div>
              <div className="cards">
                  <img src={img} alt="" className="img" />
                <div className='percent'>
                <h3>React</h3>
                  <p className="num">50%</p>
                </div>
              </div>
              <div className="cards">
                  <img src={img} alt="" className="img" />
                <div className='percent'>
                <h3>Git Hub</h3>
                  <p className="num">75%</p>
                </div>
              </div>
              </div>
            </div>
            </div>
  )
}

export default Skills