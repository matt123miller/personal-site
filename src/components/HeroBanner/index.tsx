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
    <div className="flex flex-wrap max-w-screen-md w-full mx-auto p-5">
      <h1 id="name_title">

      hello world h1
{/*         
        <span>H</span><span>i</span><span>,</span> 
        <span>I</span><span>'</span><span>m</span> 
        <span>M</span><span>a</span><span>t</span><span>t</span> */}
      </h1>
    </div>
  )
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
