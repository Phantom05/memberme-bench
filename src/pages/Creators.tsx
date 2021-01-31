import React from 'react';
import styled from 'styled-components';
import { MainHeader } from '@components/header';
import { PlainTemplate } from '@components/template';
import { Page } from '@pages/index';
import { mapper } from '@lib/mapper';
import { MainFooter } from '@components/footer';

interface Props {}

const Creators = (props: Props) => {
  return (
    <Page title={`${mapper.brand.name} - Creators`}>
      <PlainTemplate header={<MainHeader />} footer={<MainFooter />}>
        <div>Creators Page</div>
      </PlainTemplate>
    </Page>
  );
};

export default Creators;
