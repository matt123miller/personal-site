import React from 'react';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

import Container from 'components/ui/Container';
import Icon from 'components/ui/Icon';

import { links } from '../../data/Constants';

const Footer: React.FC = () => (
  <footer>
    <Container>
      <div className="flex items-center justify-center w-full">
        <Icon icon={faGithub} size="2x" />
        <a className="mx-2" href={links.github} rel="noreferrer noopener" target="_blank">
          GitHub
        </a>
        <Icon className={'ml-5'} icon={faTwitter} size="2x" />
        <a className="mx-2" href={links.twitter} rel="noreferrer noopener" target="_blank">
          Twitter
        </a>
      </div>
    </Container>
  </footer>
);

export default Footer;
