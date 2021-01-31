import React from 'react';
import styled from 'styled-components';
import { MainHeader } from '@components/header';
import { PlainTemplate } from '@components/template';
import { Page } from '@pages/index';
import { mapper } from '@lib/mapper';
import { MainFooter } from '@components/footer';
import Container from '@material-ui/core/Container';
const News = () => (
  <Page title={`${mapper.brand.name} - News`}>
    <PlainTemplate header={<MainHeader />} footer={<MainFooter />}>
      <Container maxWidth="lg">
        <div>News Page</div>
      </Container>
    </PlainTemplate>
  </Page>
);

export default News;
