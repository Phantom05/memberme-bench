import React from 'react';
import { MainHeaderStyled, HeaderStyled } from '@components/header/MainHeader.style';
import styled from 'styled-components';
import { data } from '~/data';
import { Link } from 'react-router-dom';
import './Header.scss';
console.log(data, 'data');

const MainHeader = (props: any) => {
  return (
    <Styled.MainHeader>
      <Link to="/">Home</Link>
      <Link to="/news">News</Link>
    </Styled.MainHeader>
  );
};

const Styled = {
  MainHeader: styled.header`
    color: blue;
  `,
};
export default HeaderStyled(MainHeader);
