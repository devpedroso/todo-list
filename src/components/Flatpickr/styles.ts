import { CalendarBlank as Calendar } from "phosphor-react";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CalendarBlank = styled(Calendar)`
  ${({ theme }) => css`
    position: absolute;
    height: 2rem;
    object-fit: contain;
    transition: 0.25s ease-out;
    pointer-events: none;
    color: ${theme.white};
  `}
`;
