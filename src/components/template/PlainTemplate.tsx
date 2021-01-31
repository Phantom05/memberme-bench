import React, { memo } from 'react';

const PlainTemplate = memo((props: any) => {
  return (
    <div>
      {props.header || ''}
      {props.children || props.main || ''}
      {props.footer || ''}
    </div>
  );
});

export default PlainTemplate;
