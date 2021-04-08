import React, { ReactNode } from 'react';

interface Props {
  content: any;
}

const FormatHtml: React.FC<Props> = ({ content }) => (
  <div
    className="format-html blog-post-container"
    dangerouslySetInnerHTML={{
      __html: content
    }}
  />
);

export default FormatHtml;
