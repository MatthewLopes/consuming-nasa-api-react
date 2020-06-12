import React from 'react';
import './Home.scss';
import AstronomyContainer from '../astronomy/AstronomyContainer'

function Home() {
    return (
      <div className="home">
        <header className="home-header">
            <span className="company-name-span">
              Central Testing Laboratory, Inc
            </span>
        </header>
        <body>
            <AstronomyContainer />
        </body>
      </div>
    );
  }
  
  export default Home;