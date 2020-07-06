import React from 'react';
import './Home.scss';
import AstronomyPictureOfTheDay from '../astronomy/astronomy-photo-of-the-day/AstronomyPictureOfTheDay'
import EarthPolychromaticImagingCamera from '../astronomy/earth-polychromatic-imaging-camera/EarthPolychromaticImagingCamera'
import NASA_Meatball_Logo from '../../assets/images/NASA_Meatball_Logo.svg'

function Home() {
    return (
      <div className="home">
        <header className="home-header">
          <div className="logo-title-div">
            <img src={NASA_Meatball_Logo} alt="NASA Meatball Logo" />
            <span className="company-name-span">
              React UI where I consume NASA APIs
            </span>
            <div className="api-buttons-div">
              <button>APOD</button>
              <button>EPIC</button>
            </div>
          </div>
        </header>
        <div>
          <AstronomyPictureOfTheDay />
          <EarthPolychromaticImagingCamera />
        </div>
      </div>
    );
  }
  
  export default Home;