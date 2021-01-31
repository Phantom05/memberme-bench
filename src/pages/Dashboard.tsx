import React from 'react';
import styled from 'styled-components';
import { MainHeader } from '@components/header';
import { PlainTemplate } from '@components/template';
import { Page } from '@pages/index';
import { mapper } from '@lib/mapper';
import { MainFooter } from '@components/footer';

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <Page title={`${mapper.brand.name} - Dashboard`}>
      <PlainTemplate header={<MainHeader />} footer={<MainFooter />}>
        <div>Dashboard Page</div>
      </PlainTemplate>
    </Page>
  );
};

export default Dashboard;
