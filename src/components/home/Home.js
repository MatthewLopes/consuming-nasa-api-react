import React from 'react';
import './Home.scss';
import AstronomyContainer from '../astronomy/AstronomyContainer'
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
          </div>
        </header>
        <body>
          <AstronomyContainer />
        </body>
      </div>
    );
  }
  
  export default Home;