import styled, { css } from "styled-components";

interface ContainerProps {
  isActive: boolean;
};

export const Container = styled.div`
  height: 100%;

  & a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
    font-size: 1.8rem;
    color: white;
    transition: color .2s;

    &:hover {
      color: var(--gray-300);
    }
    
    ${({ isActive }: ContainerProps) => isActive && css`
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 0.5rem;
        border-radius: 10rem 10rem 0 0;
        background-color: var(--gray-200);
      }
    `}
  }
`;
