import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
`;

export const FiltersContainer = styled.div`
  display: flex;
  gap: 2rem;
  max-width: 80rem;
  margin: 0 auto;
  margin-top: 15rem;
`;

interface FilterItemProps {
  isActive?: boolean;
};

export const FilterItem = styled.div`
  ${({ isActive = false }: FilterItemProps) => isActive 
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
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: 6rem;
  font-size: 2.3rem;
  border-radius: 1.5rem;
  cursor: pointer;
  box-shadow: 0.5rem 0.5rem 1rem rgba(0, 0, 0, 0.5);
  transition: filter .3s ease;

  &:hover {
    filter: brightness(0.8);
  }
`;

export const NovelsContainer = styled.main`
  display: grid;
  max-width: 120rem;
  gap: 1.5rem;
  grid-template-columns: repeat(5, 22rem);
  padding: 2rem;
  margin: 7rem auto;
  border-radius: 2rem;
  background-color: var(--gray-900);
`;
