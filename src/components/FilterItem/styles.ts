import styled, { css } from "styled-components";

interface ContainerProps {
  isActive?: boolean;
};

export const Container = styled.button`
  ${({ isActive = false }: ContainerProps) => isActive 
    ? css`
      background-color: var(--gray-50);
      color: var(--gray-900);
      font-weight: 600;
    ` 
    : css`
      background-color: var(--gray-900);
      color: var(--gray-50);
    `
  }

  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 5rem;
  border: none;
  cursor: pointer;
  border-radius: 1.5rem;
  font-size: 2rem;
  transition: filter .3s ease;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);

  &:hover {
    filter: brightness(0.8);
  }
`;

export const LargeContainer = styled(Container)`
  width: 20rem;
  height: 6rem;
  font-size: 2.3rem;
`;
