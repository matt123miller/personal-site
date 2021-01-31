import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from 'components/ui/Banner';
import Container from 'components/ui/Container'
import { SectionTitle } from 'helpers/definitions';

interface SectionHeroBanner extends SectionTitle {
  content: string;
  linkTo: string;
  linkText: string;
}

const HeroBanner: React.FC = () => {
  const { markdownRemark} = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "homepage" } }) {
        frontmatter {
          title
          subtitle
          content
          linkTo
          linkText
        }
      }
    }
  `);


  const heroBanner: SectionHeroBanner = markdownRemark.frontmatter;


  return (
    <div className="max-w-screen-md w-full mx-auto p-5 mt-8">
      <h1 id="name_title" className="text-center">

        hello world h1
      
      </h1>
    </div>
  )
  
  {/*         
        <span>H</span><span>i</span><span>,</span> 
        <span>I</span><span>'</span><span>m</span> 
        <span>M</span><span>a</span><span>t</span><span>t</span> */}
  
  
        // return (
  //   <Banner
  //     title={heroBanner.title}
  //     subtitle={heroBanner.subtitle}
  //     content={heroBanner.content}
  //     linkTo={heroBanner.linkTo}
  //     linkText={heroBanner.linkText}
  //   />
  // );
};

export default HeroBanner;
