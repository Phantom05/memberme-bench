import styled, { css } from 'styled-components';
import { SetStyled } from '@styles/utils';

const common = css`
  color: white;
`;
const Styled = {
  MainFooter: styled.div`
    ${common};
    background: black;
  `,
};

export const MainFooterStyled = SetStyled(Styled.MainFooter);
