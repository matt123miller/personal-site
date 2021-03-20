import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-link';
import { motion } from 'framer-motion';

import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import LinkCard from 'components/ui/LinkCard';
import { blogTags } from 'data/Constants';
import { SectionTitle, ImageSharpFluid } from 'helpers/definitions';


interface Post {
  node: {
    id: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      description: string;
      date: string;
      tags: string[];
      cover: {
        childImageSharp: {
          fluid: ImageSharpFluid;
        };
      };
    };
  };
}

const Posts: React.FC = () => {
  const { markdownRemark, allMarkdownRemark } = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { category: { eq: "blog section" } }) {
        frontmatter {
          title
          subtitle
        }
      }
      allMarkdownRemark(
        filter: { frontmatter: { category: { eq: "blog" }, published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        edges {
          node {
            id
            html
            fields {
              slug
            }
            frontmatter {
              title
              description
              date(formatString: "MMM DD, YYYY")
              tags
              cover {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `);

  const sectionTitle: SectionTitle = markdownRemark.frontmatter;
  const posts: Post[] = [...allMarkdownRemark.edges, ...allMarkdownRemark.edges, ...allMarkdownRemark.edges, ...allMarkdownRemark.edges];

  return (
    <Container section>
      <TitleSection title={'BLOG'} center />
      <div className="w-full flex flex-wrap">
        {
          blogTags.map(t => {
            //What do I do with the tags?
          })
        }
        {
          posts.map((item) => {
            const {
              id,
              fields: { slug },
              frontmatter: { title, cover, description, date, tags }
            } = item.node;

            return (
              <div className="w-full sm:w-1/2 p-3" key={id}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1 }}>
                  <LinkCard link={slug} internal center>
                    <figure className="w-full">
                      <Img className="blog-preview-image" fluid={cover.childImageSharp.fluid} alt={title} />
                    </figure>
                    <div className="p-4">
                      <h3 className="font-semibold mb-4">{title}</h3>
                      <p>{description}</p>
                    </div>
                    <div className="p-4 pt-2 mt-auto">
                      {tags.map((item) => (
                        <span className="text-xs rounded-full px-2 py-1 mr-2" key={item}>{item}</span>
                      ))}
                    </div>
                  </LinkCard>
                </motion.div>
              </div>
            );
          })
        }
      </div>
    </Container>
  );
};

export default Posts;
