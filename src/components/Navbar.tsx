import React, { ReactElement } from 'react';

const NavigationBar: React.FC = (): ReactElement => {
  return (
    <nav className="nav">
      <div className="left_nav" />
      <div className="links" />
      <div className="right_nav" />
    </nav>
  );
};

export default NavigationBar;
