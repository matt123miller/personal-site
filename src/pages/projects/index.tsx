import React from 'react';
import { Link } from 'gatsby';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import LinkCard from 'components/ui/LinkCard';
import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';

const IndexPage: React.FC = () => {

  const content = `A tool to help picking colours whilst mini painting.`;

  return (
    <Layout>
      <SEO title="About Me" />

      <Container section>
        <TitleSection title="Contact me" center />

        <div className="w-full sm:w-1/3" key="gh">
          <LinkCard link={'/projects/paint-assistant'} internal center>
            <InfoBlock title="Paint Assistant" content={content} center />
          </LinkCard>
        </div>
      </Container>

    </Layout>
  );
};

export default IndexPage;
