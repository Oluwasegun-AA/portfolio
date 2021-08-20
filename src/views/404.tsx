import React, { ReactElement } from 'react';
import NavigationBar from 'components/Navbar';
import Footer from 'components/Footer';
import PageTitle from 'components/PageTitle';

const ErrorPage: React.FC = (): ReactElement => {
  return (
    <div className="main_container">
      <NavigationBar />
      <PageTitle className="page-title_404" />
      <div className="centreBody">
        <div>
          <div id="level">
            <div id="content" className="large-screen_404">
              <div id="gears">
                <div id="gears-static" />
                <div id="gear-system-1">
                  <div id="gear15" />
                  <div id="gear14" />
                  <div id="gear13" />
                </div>
                <div id="gear-system-2">
                  <div id="gear10" />
                  <div id="gear3" />
                </div>
                <div id="gear-system-3">
                  <div id="gear9" />
                  <div id="gear7" />
                </div>
                <div id="gear-system-4">
                  <div id="gear6" />
                  <div id="gear4" />
                </div>
                <div id="gear-system-5">
                  <div id="gear12" />
                  <div id="gear11" />
                  <div id="gear8" />
                </div>
                <div id="gear1" />
                <div id="gear-system-6">
                  <div id="gear5" />
                  <div id="gear2" />
                </div>
                <div id="chain-circle" />
                <div id="chain" />
                <div id="weight" />
              </div>
              <div id="title">
                <h1>
                  <p>4🤔4</p>
                  Its either the link is invalid or I am Still Thinking of
                  something awesome to put here.
                </h1>
                <p>Please check back later.</p>
              </div>
            </div>
          </div>

          <div id="content" className="small-screen_404">
            <div id="title">
              <h1>
                <p>4🤔4</p>
                Its either the link is invalid or I am Still Thinking of
                something awesome to put here.
              </h1>
              <p>Please check back later.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
