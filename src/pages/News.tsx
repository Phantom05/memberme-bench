import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { MainHeader } from '@components/header';
import { PlainTemplate } from '@components/template';
import { Page } from '@pages/index';
import { mapper } from '@lib/mapper';
import { MainFooter } from '@components/footer';
import Container from '@material-ui/core/Container';
import axtios from 'axios';

const News = () => {
  console.log('hmm..');
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(state, 'state');
  useEffect(() => {
    axtios('https://jsonplaceholder.typicode.com/todos/1').then(({ data }) => {
      console.log(data);
    });
  }, []);
  return (
    <Page title={`${mapper.brand.name} - News`}>
      <PlainTemplate header={<MainHeader />} footer={<MainFooter />}>
        <Container maxWidth="lg">
          <div>News Page</div>
        </Container>
      </PlainTemplate>
    </Page>
  );
};

export default News;
