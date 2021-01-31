import React from 'react';

import * as Styled from './styles';
import { StyledProps } from './styles';
import Separator from 'components/ui/Separator';

interface Props extends StyledProps {
  title: string;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <div className="flex flex-col w-full">
    {subtitle && <Styled.SubTitle center={center}>{subtitle}</Styled.SubTitle>}
    <Styled.Title center={center}>{title}</Styled.Title>
    <Separator center={center}/>
  </div>
);

export default TitleSection;
