import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';

const Home: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      {/* <section className="centered_description">
          <div className="info">
            <div className="name">Olúwáségun</div>
            <div className="title">Software Engineer</div>
          </div>
        </section> */}
      <div className="bodySection">
        <section className="section_container">
          <div className="section_colomn_right">
            <div className="name">Olúwáségun</div>
            <div className="title">Software Engineer</div>
          </div>
          <div className="section_colomn_center info">
            <div className="name">Olúwáségun</div>
            <div className="title">Software Engineer</div>
          </div>
          <div className="section_colomn_left">
            <div className="name">Olúwáségun</div>
            <div className="title">Software Engineer</div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
