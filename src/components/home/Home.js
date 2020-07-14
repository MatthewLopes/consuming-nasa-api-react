import React from 'react';
import './Home.scss';
import AstronomyPictureOfTheDay from '../astronomy/astronomy-photo-of-the-day/AstronomyPictureOfTheDay'
import EarthPolychromaticImagingCamera from '../astronomy/earth-polychromatic-imaging-camera/EarthPolychromaticImagingCamera'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './nav/NavBar';
import About from './about/About'

function Home() {
    return (
      <div className="home">
        <NavBar />
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