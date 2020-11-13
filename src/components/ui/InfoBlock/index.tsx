import React, { Fragment } from 'react';

import Icon, { IconProps } from 'components/ui/Icon';

import * as Styled from './styles';
import { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

interface Props extends Styled.StyledProps {
  title: string;
  content: React.ReactNode;
  icon: Icon;
  center?: boolean;
}

const InfoBlock: React.FC<Props> = ({ icon, title, content, center }) => (
  <>
    <Styled.Icon>
      {icon}
    </Styled.Icon>
    <Styled.Wrapper center={center}>
      <Styled.Title>{title}</Styled.Title>
      <Styled.Content>{content}</Styled.Content>
    </Styled.Wrapper>
  </>
);

export default InfoBlock;
