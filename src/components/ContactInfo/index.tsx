import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import LinkCard from 'components/ui/LinkCard';
import InfoBlock from 'components/ui/InfoBlock';
import Container from 'components/ui/Container';
import TitleSection from 'components/ui/TitleSection';
import Icon, { IconProps } from 'components/ui/Icon';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

import { links } from 'data/Constants';

import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

const ContactInfo: React.FC = () => {
 
  const github = <Icon className={'text-white'} icon={faGithub} size="2x" />;
  const twitter = <Icon className={'text-white'} icon={faTwitter} size="2x" />;
  const email = <Icon className={'text-white'} icon={faPaperPlane} size="2x" />;

  return (
    <Container section>
      <TitleSection title="Contact me" center />

      <div className="w-full sm:w-1/3" key="gh">
        <LinkCard link={links.github} center>
          <InfoBlock icon={github} title="Github" content="@matt123miller" center/>
        </LinkCard>
      </div>

      <div className="w-full sm:w-1/3"  key="tw">
        <LinkCard link={links.twitter} center>
          <InfoBlock icon={twitter} title="Twitter" content="@matt123miller" center />
        </LinkCard>
      </div>

      <div className="w-full sm:w-1/3"  key="email">
        <LinkCard link={`mailto:${links.email}`} center>
          <InfoBlock icon={email} title="Email" content={links.email}  center/>
        </LinkCard>
      </div> 
    </Container>
  );
};

export default ContactInfo;
