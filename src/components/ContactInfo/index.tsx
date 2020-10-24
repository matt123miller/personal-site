import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Icon, { IconProps } from 'components/ui/Icon';
import { links } from 'data/Constants';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

interface Contact {
  node: {
    id: string;
    frontmatter: {
      title: string;
      content: string;
      icon: IconProps;
      link: string;
    };
  };
}

const ConctactInfo: React.FC = () => {
 
  return (
    <Container section>
      <TitleSection title={"Contacts"} subtitle={"For more info contact me"} center />


      <Styled.ContactInfoItem key={"gh"}>
        <InfoBlock icon={faGithub} title={"Github"} content={"@matt123miller"} link={links.github} center />
      </Styled.ContactInfoItem>

      <Styled.ContactInfoItem key={"tw"}>
        <InfoBlock icon={faTwitter} title={"Twitter"} content={"@matt123miller"} link={links.twitter} center />
      </Styled.ContactInfoItem>

      <Styled.ContactInfoItem key={"email"}>
        <InfoBlock icon={faPaperPlane} title={"Email"} content={links.email} link={`mailto:${links.email}`} center />
      </Styled.ContactInfoItem>


    </Container>
  );
};

export default ConctactInfo;
