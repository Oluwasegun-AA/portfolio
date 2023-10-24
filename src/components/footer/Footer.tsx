/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { ReactElement } from 'react';
import {
  linkedinBlack,
  twitterBlack,
  instagramBlack,
  githubBlack,
} from '../../assets';

const Footer: React.FC = (): ReactElement => {
  return (
    <nav className="container footer">
      <div className="centered_content footer_content">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/adepoju/"
        >
          <img src={linkedinBlack} alt="linkedIn" />
        </a>
        <a rel="noreferrer" href="#">
          <img src={twitterBlack} alt="twitter" />
        </a>

        <a rel="noreferrer" href="#">
          <img src={instagramBlack} alt="instagram" />
        </a>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/oluwasegun-aa"
        >
          <img src={githubBlack} alt="github" />
        </a>
      </div>
    </nav>
  );
};

export default Footer;
