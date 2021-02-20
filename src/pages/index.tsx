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
      
      <div className="max-w-screen-md w-full mx-auto p-5 mt-8">
        <h1 id="name_title" className="text-center">
          Hello world
        </h1>
        
        <div>
          siiiick content
        </div>


      </div>

      <Services />
    </Layout>
  );
};

export default IndexPage;
