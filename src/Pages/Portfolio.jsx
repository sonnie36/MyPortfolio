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

export const Portfolio = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
    <div className="Portfolio">
    <h2>My Projects</h2>
    <h3>UI/UX Designs</h3>
    <Slider {...settings}>
        <PortfolioCard img={cssPic} title="NetSniffer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={sniffer} title="NetSniffer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https rrr"/>
        <PortfolioCard img={testimonial} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={project} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={about} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
    </Slider>
      {/* <div className="displayWorks">
        <PortfolioCard img={cssPic} title="NetSniffer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={sniffer} title="NetSniffer" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https rrr"/>
        <PortfolioCard img={testimonial} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={project} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        <PortfolioCard img={about} title="SCA-Chuka Website" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " link="https://sssssss"/>
        </div> */}
    </div>
  )
}
