import styled, { css } from 'styled-components';
import { SetStyled } from '@styles/utils';

const common = css`
  color: white;
`;
const Styled = {
  MainHeaderStyled: styled.div`
    ${common};
    background: purple;
  `,
  MainHeader: styled.header`
    ${common};
    background: #ececec;
  `,
};

export const HeaderStyled = SetStyled(Styled.MainHeader);
export const MainHeaderStyled = SetStyled(Styled.MainHeaderStyled);
