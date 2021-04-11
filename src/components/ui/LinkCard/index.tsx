import React, { ReactChildren } from 'react';
import {Link} from 'gatsby';

interface Props {
  link: string;
  internal?: Boolean;
  center?: Boolean;
}

const LinkCard: React.FC<Props> = ({ link, children, internal, center }) => {

 
  if (internal) {
    return(
      <Link to={link}>
        <div className={`link-card-content card-hover ${center ? 'items-center' : ''}`} >
          {children}
        </div>
      </Link>
    );
  }
  else {
    return (
      <a className="mr-2" href={link} rel="noreferrer noopener" target="_blank">
        <div className={`link-card-content card-hover ${center ? 'items-center' : ''}`} >
          {children}
        </div>
      </a>
    );
  }
}

const InternalLink = () => {

}

const ExternalLink = () => {

}

export default LinkCard;
