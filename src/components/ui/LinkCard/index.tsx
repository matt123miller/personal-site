import React, { ReactChildren } from 'react';
import { Link } from 'gatsby';

interface Props {
  link: string;
  internal?: Boolean;
  center?: Boolean;
  index?: number;
}

const LinkCard: React.FC<Props> = ({ link, children, internal, index, center }) => {


  if (internal) {
    return (
      <div className={`link-card-content card-hover ${center ? 'items-center' : ''}`} >
        <Link to={link}>
          {children}
        </Link>
      </div>
    );
  }
  else {

    return (
      <div className={`link-card-content card-hover mr-2 ${center ? 'items-center' : ''}`} >
        <a href={link} rel="noreferrer noopener" target="_blank">
          {children}
        </a>
      </div>
    );
  }
}

const InternalLink = () => {

}

const ExternalLink = () => {

}

export default LinkCard;
