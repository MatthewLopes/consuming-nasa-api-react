import React from 'react';
import './Home.scss';
import AstronomyContainer from '../astronomy/AstronomyContainer'

function Home() {
    return (
      <div className="Home">
        <header className="Home-header">
            <span className="Company-name-span">
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