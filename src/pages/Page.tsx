import React from 'react';
import { Helmet } from 'react-helmet';

const Page = (props: any) => {
  return (
    <>
      <Helmet>
        <title>{props.title || 'App'}</title>
        {props.helmet}
      </Helmet>
      {props.children}
    </>
  );
};

export default Page;
