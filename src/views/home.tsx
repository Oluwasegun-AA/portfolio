import React, { ReactElement } from 'react';
import NavigationBar from '../components/Navbar';

const Home: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <div className="body_container" />
      <footer className="footer" />
    </div>
  );
};

export default Home;
