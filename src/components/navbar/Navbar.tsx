import React, { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';
import { darkMode } from '../../assets';

const NavigationBar: React.FC = (): ReactElement => {
  const history = useHistory();

  const navigateTo = (path: string) => {
    history.push(path);
    document.location.reload();
  };

  return (
    <nav className="container nav">
      <div className="centered_content nav_content">
        <div className="nav_centreLogo">
          <div>
            <span className="link logo" onClick={() => navigateTo('/')}>
              Olúwáségun
            </span>
          </div>
        </div>
        <div className="nav_centreButtons">
          <img className="nav_contrastModeIcon" src={darkMode} alt="darkmode" />
          <div>
            <span className="link" onClick={() => navigateTo('/aboutMe')}>
              About Me
            </span>
          </div>
          <div className="say_hello btn--black link">
            <span className="link" onClick={() => navigateTo('/contact')}>
              Say Hello
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
