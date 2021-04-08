import styled from 'styled-components';
import tw from 'tailwind.macro';

export interface WrapperProps {
  center?: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ center }) => center && tw`text-center`};
`;

export interface ContainerProps {
  section?: boolean;
}

// I just don't understand the appeal of styled components.
// TODO: I'll remove this at some point
export const Container = styled.div<ContainerProps>`
  ${tw`flex flex-wrap max-w-screen-md w-full mx-auto p-5`};
  ${({ section }) => section && tw`py-8 sm:py-16`};
`;
