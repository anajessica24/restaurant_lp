import React from 'react'
import AboutBackgound from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';

export const About = () => {
  return (
    <div className='about-section-container'>
        <div className="about-background-image-container">
            <img src={AboutBackgound} alt="" />
        </div>
        <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className="about-section-text-container">
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                Food is an importante part of a balanced diet
            </h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className='primary-text'>
                Non tincidunt magna non et elit. Dolor turpis molestie dui 
                magnis facilisis at fringilla quam.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'> Learn More </button>
                <button className='watch-video-button'>
                    {" "}
                    <BsFillPlayCircleFill /> Watch Video
                </button>
                
            </div>
        </div>
    </div>
  );
};

export default About;