import React from 'react';

import MainNav from './MainNav';
import Logo from './Logo';
import Container from '../ui/Container';

interface Props {
  siteTitle: string;
}

const Header: React.FC<Props> = ({ siteTitle }) => (

  <header className="-mb-px">
    <Container centered={true}>
      <Logo />
      <MainNav />
    </Container>
  </header>
);

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
