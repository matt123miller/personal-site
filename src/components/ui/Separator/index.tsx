
import React from 'react';

interface Props {
  center?: Boolean;
}

const Separator: React.FC<Props> = ({ center }) => (
  <div className={`separator-icon ${center && 'mx-auto'}`}>
  </div>
);

export default Separator;