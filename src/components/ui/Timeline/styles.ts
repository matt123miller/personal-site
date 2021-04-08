import styled from 'styled-components';
import tw from 'tailwind.macro';

export const Timeline = styled.div`
  ${tw`flex flex-col sm:flex-row w-full p-4 relative border-l`};
  border-color: var(--dracula-cyan);

  &:last-child {
    ${tw`pb-0`};
  }
`;

export const Date = styled.div`
  ${tw`text-xs`};
  width: fit-content;
`;

export const Point = styled.span`
  ${tw`w-3 h-3 border border-indigo-200 bg-indigo-100 rounded-full absolute`};
  background-color: var(--dracula-pink);
  border-color: var(--dracula-cyan);
  left: -6px;
  top: 23px;
`;
