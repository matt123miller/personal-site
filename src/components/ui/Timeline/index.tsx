import React from 'react';

import * as Styled from './styles';

interface Props {
  title: string;
  subtitle: string;
  content: React.ReactNode;
  startDate: string;
  endDate: string;
}

const Timeline: React.FC<Props> = ({ title, subtitle, content, startDate, endDate }) => (
  <Styled.Timeline>
    <Styled.Point />
    <div className="w-full sm:w-1/3">
      <div className="font-semibold">{title}</div>
      <div>{subtitle}</div>
      <Styled.Date>
        {startDate} - {endDate}
      </Styled.Date>
    </div>
    <div className="w-full sm:w-2/3 mt-4 sm:mt-0">{content}</div>
  </Styled.Timeline>
);

export default Timeline;
