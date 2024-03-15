import React from 'react'
import './Portfolio.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PortfolioCard from '../Components/PortfolioCard'
import project from '../assets/SCaProjects.png'
import cssPic from '../assets/NetSniffer.jpg'
import testimonial from '../assets/Testiomonials.jpg'
import about from '../assets/Sca.png'
import sniffer from '../assets/NetSnifferHome.jpg'

const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div>
    <div className="Portfolio">
    <h2>My Projects</h2>
    <h3 className='subTitle'>UI/UX Designs</h3>
    <div>
    <Slider {...settings} className='sld'>
    <PortfolioCard img={sniffer} title="NetSniffer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://www.figma.com/file/UMupUuJrzqCpKT1C9pQKuQ/Untitled?type=design&mode=design&t=rnopTq38xXGxeKGe-1"/>
        <PortfolioCard img={cssPic} title="NetSniffer" description="Security related project that collects logs from various computers and consolidates them in a central repository" link="https://www.figma.com/file/UMupUuJrzqCpKT1C9pQKuQ/Untitled?type=design&mode=design&t=rnopTq38xXGxeKGe-1"/>
        <PortfolioCard img={about} title="SCA-Chuka Website" description="She code Africa Chuka Chapter About page." link="https://sssssss"/>
        <PortfolioCard img={testimonial} title="SCA-Chuka Website" description="She code Africa Chuka Chapter About page." link="https://sssssss"/>
        <PortfolioCard img={project} title="SCA-Chuka Website" description="She code Africa project page" link="https://sssssss"/>
    </Slider>
    </div>
    </div>
    </div>
  )
}


export default Portfolio;