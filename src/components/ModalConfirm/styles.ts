import styled, { css } from "styled-components";

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1.5rem;

    & strong {
      font-size: 1.5rem;
      line-height: 1.4;
      color: ${theme.gray[100]};
    }

    & p {
      color: ${theme.gray[100]};
      opacity: 0.7;
      padding: 0 4rem;
      text-align: center;
    }
  `}
`;

export const OptionDelete = styled.div`
  ${({ theme }) => css`
    & button {
      background: ${theme.gray[400]};
      border: 0;
      font-weight: bold;
      padding: 0.75rem 2rem;
      font-size: 0.875rem;
      border-radius: 8px;
      margin: 0 0.25rem;
      cursor: pointer;

      transition: background-color 0.1s;
    }

    & button:first-child {
      color: ${theme.gray[100]};
    }

    & button:last-child {
      color: ${theme.danger};
    }

    & button:hover {
      background: ${theme.gray[600]};
    }
  `}
`;
