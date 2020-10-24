import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Icon, { IconProps } from 'components/ui/Icon';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { links } from 'data/Constants';
import { SectionTitle } from 'helpers/definitions';

import * as Styled from './styles';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ConctactInfo: React.FC = () => {
 
  const github = <Icon icon={faGithub} size="2x" />;
  const twitter = <Icon icon={faTwitter} size="2x" />;
  const email = <Icon icon={faPaperPlane} size="2x" />;

  return (
    <Container section>
      <TitleSection title={"Contacts"} subtitle={"For more info contact me"} center />

      <Styled.ContactInfoItem key={"gh"}>
        <InfoBlock icon={github} title={"Github"} content={"@matt123miller"} link={links.github} center />
      </Styled.ContactInfoItem>

      <Styled.ContactInfoItem key={"tw"}>
        <InfoBlock icon={twitter} title={"Twitter"} content={"@matt123miller"} link={links.twitter} center />
      </Styled.ContactInfoItem>

      <Styled.ContactInfoItem key={"email"}>
        <InfoBlock icon={email} title={"Email"} content={links.email} link={`mailto:${links.email}`} center />
      </Styled.ContactInfoItem> 


    </Container>
  );
};

export default ConctactInfo;
