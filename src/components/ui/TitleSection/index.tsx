import React from 'react';

import Separator from 'components/ui/Separator';

type Props = {
  title: string;
  center?: Boolean;
  subtitle?: string;
}

// It would be nice if I could decide what heading type to use inside as the main heading.
// Pass children? Export different heading types? Pass an arg?
const TitleSection: React.FC<Props> = ({ title, center, subtitle }) => (
  <div className="flex flex-col w-full">
    {
      subtitle &&
      <h4 className={`text-xs w-full text-left ${center && 'text-center'}`}>{subtitle}</h4>
    }
    <h2 className={`uppercase mb-4 text-lg font-bold w-full text-left ${center && 'text-center'}`}>{title}</h2>
    <Separator center={center} />
  </div>
);

export default TitleSection;
