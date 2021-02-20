import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  
  return (
    <div className="max-w-screen-md w-full mx-auto p-5 mt-8">
      <h1 id="name_title" className="text-center">

        hello world h1
      
      </h1>
    </div>
  )
};

export default HeroBanner;
