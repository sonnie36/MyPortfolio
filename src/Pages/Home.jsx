import React from 'react'
import './Home.css'
import pic from '../assets/me.jpg'
export const Home = () => {
  return (
    <div>
        <div className="intro">
            <div className="imgIntro">
                <img src={pic} alt="" className="myImage" />
            </div>
            <div className='introDetails'>
            <p className="hello">Hello,</p>
            <p className='introName'>
                I'm Salome Mwati.
            </p>
            <p className="introDesc"> A skilled web developer who merges technical expertise with UI/UX knowledge to craft seamless and intuitive interfaces. </p>
            </div>
        </div>
          
    </div>
  )
}
