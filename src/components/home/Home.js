import React from 'react';
import './Home.scss';
import AstronomyPictureOfTheDay from '../astronomy/astronomy-photo-of-the-day/AstronomyPictureOfTheDay'
import EarthPolychromaticImagingCamera from '../astronomy/earth-polychromatic-imaging-camera/EarthPolychromaticImagingCamera'
import NASA_Meatball_Logo from '../../assets/images/NASA_Meatball_Logo.svg'
import { BrowserRouter as Router, Switch, Route, Link, BrowserRouter } from 'react-router-dom';
import NavButtons from '../../NavButtons';
import About from './about/About'

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
              <BrowserRouter forceRefresh={true}>
                <NavButtons />
              </BrowserRouter>
            </div>
          </div>
        </header>
        <Router>
          <div>
            <Switch>
              <Route path="/" exact component={About} />
              <Route path="/apod" exact component={AstronomyPictureOfTheDay} />
              <Route path="/epic" exact component={EarthPolychromaticImagingCamera} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
  
  export default Home;