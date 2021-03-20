import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';

const Home: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      {/* <NavigationBar /> */}
      <div className="body_container">
        <div className="centered_description">
          <div className="Info">
            <div className="name">Olúwáségun</div>
            <div className="title">Software Engineer</div>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
