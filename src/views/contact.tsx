import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';
import Button from 'components/Button';
import PageTitle from 'components/PageTitle';

const Contact: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <div className="page-body">
        <PageTitle
          titleText="Yay! I'lld like to hear from you"
          descriptionText="you can likewise reach me via hello@segunadepoju.com"
        />
        <div className="body_container">
          <section className="section_container">
            <div className="section_column_left _leftPane" />
            <div className="section_column_center _centerPane">
              <div className="mail center">
                <input
                  placeholder="Your Email"
                  className="contact_email_input"
                />
                <textarea
                  placeholder="Drop me a message . . ."
                  className="contact_message_input"
                />
                <div className="mail_btn">
                  <Button
                    className="standard-btn--ash"
                    value={
                      <div className="send-mail">
                        <div>Send</div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 345.8 345.8"
                        >
                          <path d="M339.8 260.4c0.1 0 0.3-0.1 0.4-0.1 0.1 0 0.2-0.1 0.3-0.1 0.1 0 0.2-0.1 0.4-0.1 0.1 0 0.2-0.1 0.3-0.1 0.1 0 0.2-0.1 0.3-0.2 0.1-0.1 0.2-0.1 0.3-0.2 0.1-0.1 0.2-0.1 0.3-0.2 0.1-0.1 0.2-0.1 0.3-0.2 0.1-0.1 0.2-0.2 0.3-0.2 0.1-0.1 0.2-0.1 0.3-0.2 0.2-0.1 0.3-0.3 0.5-0.4 0 0 0.1 0 0.1-0.1 0 0 0.1-0.1 0.1-0.1 0.1-0.1 0.3-0.3 0.4-0.5 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.2-0.2 0.2-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.1-0.2 0.2-0.3 0.1-0.1 0.1-0.2 0.2-0.4 0-0.1 0.1-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.3 0-0.1 0.1-0.2 0.1-0.4 0-0.1 0.1-0.2 0.1-0.4 0-0.1 0-0.3 0.1-0.4 0-0.1 0-0.2 0-0.3 0-0.2 0-0.5 0-0.7V92.8c0-4.1-3.4-7.5-7.5-7.5h-236.2c-0.1 0-0.1 0-0.2 0 -0.1 0-0.3 0-0.4 0 -0.1 0-0.2 0-0.3 0 -0.1 0-0.3 0-0.4 0.1 -0.1 0-0.2 0-0.4 0.1 -0.1 0-0.2 0.1-0.4 0.1 -0.1 0-0.2 0.1-0.3 0.1 -0.1 0-0.2 0.1-0.3 0.1 -0.1 0-0.2 0.1-0.3 0.1 -0.1 0.1-0.2 0.1-0.4 0.2 -0.1 0.1-0.2 0.1-0.3 0.2 -0.1 0.1-0.2 0.1-0.3 0.2 -0.1 0.1-0.2 0.1-0.3 0.2 -0.1 0.1-0.2 0.2-0.3 0.2 -0.1 0.1-0.2 0.2-0.3 0.2 -0.1 0.1-0.2 0.2-0.3 0.2 -0.1 0.1-0.2 0.2-0.3 0.3 0 0.1-0.1 0.1-0.1 0.1 0 0 0 0.1-0.1 0.1 -0.1 0.1-0.2 0.2-0.3 0.3 -0.1 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.1 0.2-0.2 0.3 -0.1 0.1-0.1 0.2-0.2 0.3 0 0.1-0.1 0.2-0.1 0.3 0 0.1-0.1 0.2-0.1 0.3 0 0.1-0.1 0.2-0.1 0.3 0 0.1-0.1 0.2-0.1 0.4 0 0.1 0 0.2-0.1 0.3 0 0.1 0 0.3-0.1 0.4 0 0.1 0 0.2 0 0.3 0 0.1 0 0.3 0 0.4 0 0 0 0.1 0 0.1v46.3c0 4.1 3.4 7.5 7.5 7.5s7.5-3.4 7.5-7.5v-29.6l66.7 59c-0.3 0.2-0.7 0.5-1 0.8l-65.7 65.7v-49.3c0-4.1-3.4-7.5-7.5-7.5s-7.5 3.4-7.5 7.5v9.2h-38.7c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h38.8v43.2c0 4.1 3.4 7.5 7.5 7.5h236.3c0.2 0 0.5 0 0.7 0 0.1 0 0.2 0 0.3 0C339.5 260.5 339.7 260.5 339.8 260.4zM330.8 235l-65.7-65.7c0 0-0.1-0.1-0.1-0.1l49.4-41.9c3.2-2.7 3.5-7.4 0.9-10.6 -2.7-3.2-7.4-3.5-10.6-0.9l-84.4 71.6 -98.4-87.2h209V235zM185.9 179.9c0.5-0.5 1-1.1 1.3-1.8l28.1 24.8c1.4 1.3 3.2 1.9 5 1.9 1.7 0 3.5-0.6 4.9-1.8l28.6-24.3c0.3 0.4 0.6 0.7 0.9 1.1l65.7 65.7H120.2L185.9 179.9z" />
                          <path d="M7.5 170.7h126.7c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5H7.5c-4.1 0-7.5 3.4-7.5 7.5S3.4 170.7 7.5 170.7z" />
                          <path d="M20.6 129.3H77.5c4.1 0 7.5-3.4 7.5-7.5s-3.4-7.5-7.5-7.5H20.6c-4.1 0-7.5 3.4-7.5 7.5S16.5 129.3 20.6 129.3z" />
                          <path d="M62.5 226.5h-55c-4.1 0-7.5 3.4-7.5 7.5s3.4 7.5 7.5 7.5h55c4.1 0 7.5-3.4 7.5-7.5S66.6 226.5 62.5 226.5z" />
                        </svg>
                      </div>
                    }
                    onClick={() => ''}
                  />
                </div>
              </div>
            </div>
            <div className="section_column_right _centerPane" />
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
