import React from 'react'
import './PortFolioCard.css'
const PortfolioCard = ({img,title,description,link}) => {
  return (
    <div className="work">
        <img src={img} alt="Project" className="imgPort"/>
          <h6 className="title">{title}</h6>
          <p className="WorkDesc">{description}</p>
          <p className="workLink">{link}</p>
    </div>
  )
}

export default PortfolioCard