import React, { Fragment } from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import { Wrapper, WrapperProps } from '../SharedStyles';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props extends WrapperProps {
  title: string;
  content: React.ReactNode;
  // @ts-ignore 'Icon' refers to a value, but is being used as a type here. Did you mean 'typeof Icon'?"
  icon: Icon; 
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center }) => (
  <>
    <span className="icon icon-16">
      {icon}
    </span>
    <Wrapper className="mb-2" center={center}>
      <h3 className="text-md mt-1 font-semibold">{title}</h3>
      <p className="mt-1">{content}</p>
    </Wrapper>
  </>
);

export default InfoBlock;
