import React from 'react';

import Separator from 'components/ui/Separator';

interface Props extends StyledProps {
  title: string;
  center?: Boolean;
  subtitle?: string;
}

const TitleSection: React.FC<Props> = ({ center, title, subtitle }) => (
  <div className="flex flex-col w-full">
    {
      subtitle && 
      <h4 className={`text-xs w-full text-left ${center && 'text-center'}`}>{subtitle}</h4>
    }
    <h2 className={`uppercase mb-4 text-lg font-bold w-full text-left ${center && 'text-center'}`}>{title}</h2>
    <Separator center={center}/>
  </div>
);

export default TitleSection;
