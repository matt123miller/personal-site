import React from 'react';

import { Container as StyledContainer,  ContainerProps} from '../SharedStyles';

interface Props extends ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ section, children }) => (
  <StyledContainer section={section}>{children}</StyledContainer>
);

export default Container;
