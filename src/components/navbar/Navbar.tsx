import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import dark_mode from '@assets/dark_mode.svg';

const NavigationBar: React.FC = (): ReactElement => {
  return (
    <nav className="container nav">
      <div className="centered_content nav_content">
        <div className="nav_centreLogo">
          <div>
            <Link className="link logo" to="/">
              Olúwáségun
            </Link>
          </div>
        </div>
        <div className="nav_centreButtons">
          <img
            className="nav_contrastModeIcon"
            src={dark_mode}
            alt="darkmode"
          />
          <div>
            <Link className="link" to="/aboutMe">
              About Me
            </Link>
          </div>
          <div className="say_hello btn--black link">
            <Link className="link" to="/contact">
              Say Hello
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
