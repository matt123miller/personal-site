import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';
import Experience from 'components/Experience';
import Education from 'components/Education';

const MyWorkPage: React.FC = () => (
  <Layout>
    <SEO title="My Work" />
    <Experience />
    <Education />
  </Layout>
);

export default MyWorkPage;
