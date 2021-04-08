import React from 'react';
import {Link} from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import HeroBanner from 'components/HeroBanner';
import Services from 'components/ui/WhatIDo';

const IndexPage: React.FC = () => {
  return (
    <Layout>
      <SEO title="About Me" />
      
      <div className="max-w-screen-md w-full mx-auto p-5 mt-8 text-center">
        <h1 id="name_title" className="">
          Hi, I'm Matt
        </h1>

        <p>
          I'm a full stack web developer living in Suffolk, UK. 
        </p>
        <p>
          I have 2 cats 🐱 🐈. He/him please.
        </p>
        <p>
          I'm also a Dungeon Master and paint miniature plastic people for fun.
        </p>
        <p>
          You can read my thoughts about all these things <Link className="animated-link" to={'/blog'}>on my blog</Link> 
        </p>
        
      </div>

    </Layout>
  );
};

export default IndexPage;
