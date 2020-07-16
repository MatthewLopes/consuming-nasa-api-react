import React from 'react';
import '../../../App.css';
import '../Home.css';
import { BrowserRouter } from 'react-router-dom';
import NASA_Meatball_Logo from '../../../assets/images/NASA_Meatball_Logo.svg'
import NavButtons from './NavButtons'

function NavBar() {  
    return (
        <header className="home-header">
          <div className="logo-title-div">
            <img src={NASA_Meatball_Logo} alt="NASA Meatball Logo" />
            <h1 className="company-name-span">
              React UI where I consume NASA APIs
            </h1>
            <div className="api-buttons-div">
              <BrowserRouter forceRefresh={true}>
                <NavButtons />
              </BrowserRouter>
            </div>
          </div>
        </header>
    );
}


export default NavBar;