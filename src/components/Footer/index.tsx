import React from 'react';

import Container from 'components/ui/Container';
import { links } from '../../data/Constants';
import * as Styled from './styles';

const Footer: React.FC = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href={links.github} rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link href={links.twitter} rel="noreferrer noopener" target="_blank">
          Twitter
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
