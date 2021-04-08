import React from 'react';

import { Container as StyledContainer,  ContainerProps} from '../SharedStyles';

interface Props extends ContainerProps {
  children: React.ReactNode;
  centered?: Boolean;
}

const Container: React.FC<Props> = ({ centered, section, children }) => (
  <StyledContainer className={centered ? 'items-center' : ''} section={section}>{children}</StyledContainer>
);

export default Container;
