import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

const menuLinks = [{ name: 'Logout', link: '/signup' }];

const NavigationBar: React.FC = (): ReactElement => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="brand">
          <Link to="/">
            <img src="{}" className="favicon" alt="oluwasegun" />
          </Link>
        </div>
        <div className="links">
          {menuLinks.map(
            ({ name }): ReactElement => (
              <button type="button" className={name} key={name}>
                {name}
              </button>
            ),
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
