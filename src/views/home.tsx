import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';
import BodySubSection from 'components/BodySecton';

const Home: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <div className="centreBody">
        <BodySubSection
          className="info"
          centerPane={
            <div>
              <div className="name">Olúwáségun</div>
              <div className="title">Software Engineer</div>
            </div>
          }
        />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
