import React, { useState } from 'react';
import { Link } from 'gatsby';

import * as Styled from './styles';

interface MainNavItem {
  title: string;
  slug: string;
}

const mainNavItems: MainNavItem[] = [
  {
    title: 'About Me',
    slug: '/'
  },
  {
    title: 'My Work',
    slug: '/experience/'
  },
  {
    title: 'Blog',
    slug: '/blog/'
  },
  {
    title: 'Contact Me',
    slug: '/contact/'
  }
];

const MainNav: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Styled.MainNav open={open}>
        {
          mainNavItems.map((item, index) => (
            <Link 
              className={'main-nav-item animated-link text-xl'}
              key={`nav-item-${index}`}
              to={item.slug}
              activeClassName="active"
            >
              {item.title}
            </Link>
          ))
        }
      </Styled.MainNav>
      <Styled.ToogleMainNav open={open} onClick={() => setOpen(!open)}>
        {/* Each span is styled in the styled component. Just ignore it. */}
        <span />
        <span />
        <span />
      </Styled.ToogleMainNav>
    </>
  );
};

export default MainNav;
