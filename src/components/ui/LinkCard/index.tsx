import React, { ReactChildren } from 'react';

interface Props {
  link: string;
  center?: Boolean;
}

const LinkCard: React.FC<Props> = ({ link, children, center }) => {

  return (
    <a className="text-indigo-900 hover: text-indigo-600 mx-2" href={link} rel="noreferrer noopener" target="_blank">
      <div className={`flex flex-col my-4 mx-3 p-4 bg-white rounded-lg border border-gray-300 ${center ? 'items-center' : ''}`} >
        {children}
      </div>
    </a>
  );
}

export default LinkCard;
