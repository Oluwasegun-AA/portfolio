import React, { ReactElement } from 'react';
import githubBlack from '@assets/github_black.svg';
import instagramBlack from '@assets/instagram_black.svg';
import linkedinBlack from '@assets/linkedin_black.svg';
import twitterBlack from '@assets/twitter_black.svg';

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
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Oluwasegun_AA"
        >
          <img src={twitterBlack} alt="twitter" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/oluwasegun_aa/"
        >
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
