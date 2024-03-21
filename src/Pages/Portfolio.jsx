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
import AllLogs from '../assets/AllLogs.png'
import AllLogsSearch from '../assets/allLogsSearch.png'
import BlackM from '../assets/BlackM.png'
import gdsc from '../assets/GDSC.jpg'
import { useEffect, useState } from 'react';

const Portfolio = () => {
  // var settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 3,
  //   slidesToScroll: 1
  // };
    // State to store the current settings
    const [settings, setSettings] = useState({
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    });
  
    // Update settings based on screen size
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 750) {
          setSettings({
            ...settings,
            slidesToShow: 2 // Change to 2 slides for screens 750px and below
          });
        } else {
          setSettings({
            ...settings,
            slidesToShow: 3 // Default to 3 slides for larger screens
          });
        }
      };
  
      // Call handleResize on initial render and when the window is resized
      handleResize();
      window.addEventListener('resize', handleResize);
  
      // Cleanup event listener on component unmount
      return () => window.removeEventListener('resize', handleResize);
    }, []); 
  return (
    <div>
    <div className="Portfolio">
    <h2>My Projects</h2>
    <h3 className='subTitle'>UI/UX Designs</h3>
    <div>
    <Slider {...settings} className='sld'>
        <PortfolioCard img={cssPic} title="NetSniffer" description="Security related project that collects logs from various computers and consolidates them in a central repository" link="https://www.figma.com/file/UMupUuJrzqCpKT1C9pQKuQ/Untitled?type=design&mode=design&t=rnopTq38xXGxeKGe-1"/>
        <PortfolioCard img={about} title="SCA-Chuka Website" description="She code Africa Chuka Chapter About page." link="https://www.figma.com/file/ZtzPGibgwI5omIqOqJu5N5/SCA-Chuka-Website-Design?type=design&mode=design&t=nB7IEX4XKtBIUlFP-0"/>
        <PortfolioCard img={AllLogs} title="AllLogs" description="AllLogs" link="https://www.figma.com/file/iIz90mrCh8e5LfbvpFaHTt/Untitled?type=design&node-id=0-1&mode=design&t=sbCxv1r3UFz44zNf-0"/>
        <PortfolioCard img={AllLogsSearch} title="AllLogs" description="AllLOgs" link="https://www.figma.com/file/iIz90mrCh8e5LfbvpFaHTt/Untitled?type=design&node-id=0-1&mode=design&t=sbCxv1r3UFz44zNf-0"/>
        <PortfolioCard img={BlackM} title="BlackM" description="BlackM" link="https://www.figma.com/file/dtunnD1HUR00RQxJrjdefQ/Untitled?type=design&mode=design&t=CucJGjU8ThOUxDpr-0"/>
        <PortfolioCard img={gdsc} title="GDSC Chuka Website" description="Collaboration project for GDSC Chuka" link="https://www.figma.com/file/dtunnD1HUR00RQxJrjdefQ/Untitled?type=design&mode=design&t=CucJGjU8ThOUxDpr-0"/>
    </Slider>
    </div>
    </div>
    </div>
  )
}


export default Portfolio;