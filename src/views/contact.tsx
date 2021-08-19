import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';
import Button from 'components/Button';
import PageTitle from 'components/PageTitle';
import envelope from '../assets/envelope.svg';

const Contact: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <PageTitle titleText="Olúwáségun" descriptionText="Software Engineer" />
      <div className="body_container">
        <section className="section_container">
          <div className="section_column_left _leftPane" />
          <div className="section_column_center _centerPane">
            <div className="mail center">
              <input className="contact_email_input" />
              <textarea className="contact_message_input" />
              <div className="mail_btn">
                <Button className="standard-btn--white" onClick={() => ''}>
                  <img
                    src={envelope}
                    className="envelop_icon"
                    alt="send mail"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="section_column_right _centerPane" />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
