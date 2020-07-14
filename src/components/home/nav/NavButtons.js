import React from 'react';
import '../../../App.css';
import { Link } from 'react-router-dom';
import { createBrowserHistory as history} from 'history';
import { withRouter } from 'react-router-dom'

function NavButtons() {  
    return (
        <nav>
            <div className="nav-buttons">
                <Link to="/">
                  <button onClick={() => history.push('/about')}>About</button>
                </Link>
                <Link to="/apod">
                  <button onClick={() => history.push('/apod')}>APOD</button>
                </Link>
                <Link to="/epic">
                  <button onClick={() => history.push('/epic')}>EPIC</button>
                </Link>
            </div>
        </nav>
    );
}


export default withRouter(NavButtons);