import React from 'react'
import './PortFolioCard.css'
import iconImage from '../assets/iconLink.png'

const PortfolioCard = ({img,title,description,link}) => {
  return (
    <div className="work">
        <img src={img} alt="Project" className="imgPort"/>
          <h6 className="title">{title}</h6>
          <p className="WorkDesc">{description}</p>
          <a href={link} className='viewLink'>
              <img src={iconImage} alt="view Page" className='iconImage'/> <span className="view">View</span>
      </a>
          <p className="workLink">{link}</p>
    </div>
  )
}

export default PortfolioCard