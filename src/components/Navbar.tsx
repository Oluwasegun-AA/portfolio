import React, { ReactElement } from 'react';
import dark_mode from '../assets/dark_mode.svg';

const NavigationBar: React.FC = (): ReactElement => {
  return (
    <nav className="container nav">
      <div className="centered_content nav_content">
        <div className="nav_centreLogo">
          <div>Olúwáségun</div>
        </div>
        <div className="nav_centreButtons">
          <img
            className="nav_contrastModeIcon"
            src={dark_mode}
            alt="instagram"
          />
          <div>About Me</div>
          <div className="say_hello">Say Hello</div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
