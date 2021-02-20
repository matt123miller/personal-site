import React, { ReactChildren } from 'react';

interface Props {
  link: string;
  center?: Boolean;
}

const LinkCard: React.FC<Props> = ({ link, children, center }) => {

  return (
    <a className="mx-2" href={link} rel="noreferrer noopener" target="_blank">
      <div className={`link-card-content ${center ? 'items-center' : ''}`} >
        {children}
      </div>
    </a>
  );
}

export default LinkCard;
