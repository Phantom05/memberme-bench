import React from 'react';
import styled from 'styled-components';
import { MainHeader } from '@components/header';
import { PlainTemplate } from '@components/template';
import { Page } from '@pages/index';
import { mapper } from '@lib/mapper';
import { MainFooter } from '@components/footer';

const News = () => (
  <Page title={`${mapper.brand.name} - News`}>
    <PlainTemplate header={<MainHeader />} footer={<MainFooter />}>
      <div>News Page</div>
    </PlainTemplate>
  </Page>
);

export default News;
