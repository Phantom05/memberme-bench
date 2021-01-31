import React from 'react';
import { MainHeaderStyled, HeaderStyled } from '@components/header/MainHeader.style';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { mapper } from '@lib/mapper';
import { capitalize } from '@lib/utils';
import './Header.scss';

const { home, news, resetpassword, signup } = mapper.links.header;

const MainHeader = (props: any) => {
  return (
    <Styled.MainHeader>
      <Link to={home.href}>{capitalize(home.text)}</Link>
      <Link to={news.href}>{capitalize(news.text)}</Link>
      <Link to={signup.href}>{capitalize(signup.text)}</Link>
      <Link to={resetpassword.href}>{capitalize(resetpassword.text)}</Link>
    </Styled.MainHeader>
  );
};

const Styled = {
  MainHeader: styled.header`
    color: blue;
    a {
      display: inline-block;
      margin-right: 10px;
    }
  `,
};
export default HeaderStyled(MainHeader);
